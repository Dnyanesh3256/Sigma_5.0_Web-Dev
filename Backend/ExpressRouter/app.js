const express = require("express");
const app = express();
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const port = 8080;

app.use("/users", user);
app.use("/posts", post);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("root working");
});