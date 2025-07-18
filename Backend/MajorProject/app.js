const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("./schema.js");
const { error } = require("console");
// const Review = require("./models/review.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const MongoStore = require("connect-mongo");

const port = 8080;

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const dbUrl = process.env.ATLAS_DB_URL;

async function main() {
    await mongoose.connect(dbUrl);
}

main()
    .then((res) => {
        console.log("Connection established!!");
    })

    .catch((err) => {
        console.log("Something went wrong!!");
    });

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600
});

store.on("error", () => {
    console.log("error in mongo session store", err);
});

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 *60 * 60 * 1000,
        httpOnly: false 
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email: "demo26@gmail.com",
//         username: "demo69",
//     });

//     let registeredUser = await User.register(fakeUser, "hello");
//     console.log(registeredUser);
//     res.send(registeredUser);
// });

app.use("/listings", listingRouter);
app.use("/listings/:id", reviewRouter);
app.use("/", userRouter);

// app.get("/", (req, res) => {
//     res.send("working");
// });



// app.all("/*", (req, res, next) => {
//     next(new ExpressError(404, "Page not found!"));
// });

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrog!" } = err;
    res.status(statusCode).render("error.ejs", { err });
    // res.status(statusCode).send(message);
});




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});