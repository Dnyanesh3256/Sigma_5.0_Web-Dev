const express = require("express");
const app = express();
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const port = 8080; 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", user);
app.use("/posts", post);

app.use(flash());

const sessionOptions = {
    secret: "secretstring",
    resave: false, 
    saveUninitialized: true
}

app.use(session(sessionOptions));

app.use((req, res, next) => {
    res.locals.errMsg = req.flash("error");
    res.locals.succMsg = req.flash("success");
    next();
});

app.get("/test", (req, res) => {
    res.send("test running");
});

// app.use(cookieParser("secretcode"));

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }

    res.send(`you send request ${req.session.count} times`);
});

// storing session info
// app.get("/register", (req, res) => {
//     let { name= "Anonymous" } = req.query;
//     req.session.name = name;
//     req.flash("success", "user registered successfully!");
//     res.redirect("/hello");
// });

app.get("/register", (req, res) => {
    let { name= "Anonymous" } = req.query;
    req.session.name = name;
    if(name === "Anonymous"){
        req.flash("error", "user not registerd!");
    }else{
        req.flash("success", "user registerd successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});

// app.get("/", (req, res) => {
//     res.send("root working");
//     console.log(req.cookies);
// });

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "namaste");
//     res.cookie("madein", "India");
//     res.send("Sent you some coockies!!");
// });

// app.get("/greet", (req, res) => {
//     let { name = "Anonymous" } = req.cookies;
//     res.send(`Hello ${name}`);
// });

// app.get("/getsignedcoockie", (req, res) => {
//     res.cookie("made-in", "India", { signed: true });
//     res.send("signed cookie send");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.cookies);
//     res.send("verified!");
// });