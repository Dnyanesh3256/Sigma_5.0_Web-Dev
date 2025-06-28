const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1/amazon");
}

main()
    .then((res) => {
        console.log("Connection successful!!");
    })

    .catch((err) => {
        console.log(err);
    });

const bookSchema = {
    title : {
        type : String,
        required : true
    },

    author : {
        type : String
    },

    price : {
        type : Number
    }
};

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Algebra Part-I",
    author: "A.Eshwaran",
    price: 899
});

book1.save();