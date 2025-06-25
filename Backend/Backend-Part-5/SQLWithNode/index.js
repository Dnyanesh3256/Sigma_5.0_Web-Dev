const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const express = require("express");
const port = 8080;

const path = require("path");

const methodOverride = require("method-override");

const { v4 : uuidv4 } = require("uuid");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended : true }));
app.use(methodOverride("_method"));

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "college",
    password : "3256"
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password()
    ]
}

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// Home Route
app.get("/", (req, res) => {
    let query = `SELECT count(*) FROM user`;
    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    }catch(err){
        res.render("Some error occurred");
    }
});

// Show Route
app.get("/users", (req, res) => {
    let query = `SELECT * FROM user`;
    try{
        connection.query(query, (err, users) => {
            if(err) throw err;
            res.render("showUsers.ejs", { users });
        });
    }catch(err){
        res.send("Some error occurred");
    }
});

// Edit Username Route
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id="${id}"`;
    
    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("editUsername.ejs", { user });
        });
    }catch(err){
        res.send("Something went wrong!!");
    }
});

//Update Route
app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    let { password : formPass, username : formUsername } = req.body;
    let query = `SELECT * FROM user WHERE id="${id}"`;
    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send(`WRONG Password!!`);
            }else{
                let query2 = `UPDATE user SET username = "${formUsername}" WHERE id = "${id}"`;
                connection.query(query2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/users");
                });
            }
        });
    }catch(err){
        res.send("Something went wrong!!");
    }
});

// Add User Form
app.get("/add", (req, res) => {
    res.render("addUser.ejs");
});

app.post("/", (req, res) => {
    let id = uuidv4();
    let { username, email, password } = req.body
    console.log(id, username, email, password);

    let query = `INSERT INTO user (id, username, email, password) VALUES ("${id}", "${username}", "${email}", "${password}")`;
    try{ 
        connection.query(query, (err, result) => {
            if(err) throw err;
            res.redirect("/");
        });
    }catch(err){
        console.log(err);
        res.send("something went wrong");
    }
});

// Delete User Form
app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id="${id}"`;

    try{
        connection.query(query, (err, result) => {
            let user = result[0];
            res.render("deleteUser.ejs", { user });
        });
    }catch(err){
        res.send("something went wrong!!");
    }
});

//Delete User 
app.delete("/users/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let query = `SELECT * FROM user WHERE id="${id}"`;

    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            let user = result[0];
            
            if(user.password != password){
                res.send("WRONG Password!!");
            }else{
                let query2 = `DELETE FROM user WHERE id="${id}"`;
                connection.query(query2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/");
                });
            }
        });
    }catch(err){
        res.send("Something went wrong!!");
    }
});