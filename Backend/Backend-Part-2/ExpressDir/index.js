const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listeninng on port ${port}`);
})

// app.use((req, res) => {
//     console.log("request received");

//     let data = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(data);
// })

app.get("/", (req, res) => {
    res.send("You contacted root path !!");
})

app.get("/help", (req, res) => {
    res.send("You contacted help path!!");
})

// app.get("*", (req, res) => {
//     res.send("This path does not exist...");
// });

app.post("/", (req, res) => {
    res.send("You send post request to root");
})

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;

    let resData = `<h1>welcome to the page of @${username}.</h1>`;
    res.send(resData); 
})

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send("Nothing searched..");
    } 

    res.send(`<h1>serach results for query : ${q}</h1>`);
})