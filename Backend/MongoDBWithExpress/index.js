const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

const port = 8080;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended : true }));

app.use(methodOverride("_method"));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1/fakewhatsapp");
}

main()
    .then((res) => {
        console.log("Connection successful!!");
    })

    .catch((err) => {
        console.log(err);
    });

//Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!!!" } = err;
    res.status(status).send(message);
});

function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err));
    };
};

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    throw new ExpressError(404, "page not found");
    res.send("working");
});

app.get("/chats", asyncWrap(async (req, res, next) => {
    try{
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    }catch(err){
        next(err);
    } 
}));

app.get("/chats/new", (req, res) => {
    res.render("newChat.ejs");
});

app.post("/chats", asyncWrap(async (req, res, next) => {
    try{
        let { from, message, to } = req.body;
    
        let newChat = new Chat({
            from: from,
            message: message, 
            to: to,
            created_at: new Date()
        });

        await newChat.save();

        res.redirect("/chats");
    }catch(err){
        next(err);
    }
}));

app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    try{
        let { id } = req.params;

        let chat = await Chat.findById(id);

        res.render("editChat.ejs", { chat });
    }catch(err){
        next(err);
    }
}));

app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    try{
        let { id } = req.params;
        let { message: newMsg } = req.body;

        let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { runValidators: true, new: true });

        console.log(updatedChat);

        res.redirect("/chats");
    }catch(err){
        next(err);
    }   
}));

app.delete("/chats/:id",asyncWrap(async (req, res, next) => {
    try{
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);

        res.redirect("/chats");
    }catch(err){
        next(err);
    }
}));

app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    try{
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
            next(new ExpressError(404, "chat not found"));
        }
        res.render("editChat.ejs", { chat });
    }catch(err){
        next(err);
    }
}));