const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const { error } = require("console");
const Review = require("./models/review.js");
const listing = require("./routes/listing.js");
const review = require("./routes/review.js");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/listings", listing);
app.use("/listings/:id", review);

app.engine("ejs", ejsMate);

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then((res) => {
        console.log("Connection established!!");
    })

    .catch((err) => {
        console.log("Something went wrong!!");
    });



app.get("/", (req, res) => {
    res.send("working");
});

// app.all("*", (req, res, next) => {
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