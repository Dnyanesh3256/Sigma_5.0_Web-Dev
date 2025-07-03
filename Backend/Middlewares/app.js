const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

// Utility Middleware
app.use((req, res, next) => {
    let time = new Date(Date.now());
    console.log(time);
    next();
})

// Authentication Token
// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if(token === "giveaccess"){
//         next();
//     }

//     res.send("ACCESS DENIED!!")
// });

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!!" } = err;
    res.status(status).send.message(message);
})

//Authentication Function
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }

    throw new ExpressError(401, "ACCESS DENIED!!");
};

app.get("/", (req, res) => {
    res.send("root");
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access forbidden");
});

app.get("/api", checkToken, (req, res) => {
    res.send("root");
});

app.get("/b", (req, res) => {
    abcd = abcd;
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

