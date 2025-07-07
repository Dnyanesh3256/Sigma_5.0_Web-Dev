const express = require("express");
const app = express();
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const port = 8080; 

app.use("/users", user);
app.use("/posts", post);

const sessionOptions = {
    secret: "secretstring",
    resave: false, 
    saveUninitialized: true
}

app.use(session(sessionOptions));

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
app.get("/register", (req, res) => {
    let { name= "Anonymous" } = req.query;
    req.session.name = name;
    res.send(name);
});

app.get("/hello", (req, res) => {
    res.send(`hello, ${req.session.name}`);
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