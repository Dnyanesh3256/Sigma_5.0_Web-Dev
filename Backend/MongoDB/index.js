const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
    .then(() => {
        console.log("Connection successful!!");
    })

    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

let user3 = new User({
    name : "Karan",
    email : "karan@gmail.com",
    age : 23
});

// user3.save()
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 21 },
//     { name: "Bruce", email: "bruce@gmail.com", age: 27 },
//     { name: "Doe", email: "doe@gmail.com", age: 26 }
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.find({age : {$lt : 20}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findById("685ebf1df9fce2460001600e")
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.updateOne({ _id: "685ebf4d9fbd52adbde38834" }, { name : "Banner"})
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.findOneAndUpdate({ _id: "685ebf4d9fbd52adbde38835" }, { name: "kartik" })
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.findOneAndUpdate({ _id: "685ebf4d9fbd52adbde38835" }, { name: "Milne" }, { new: true })
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndUpdate(("685ebf4d9fbd52adbde38833"), { name: "Starc" })
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndUpdate(("685ebe12f1d4b9491b6fc150"), { name: "Raja" }, { new: true })
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndDelete(("685ebd333faa3998b37b323a"))
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     });

User.findOneAndDelete({ name: "Raja" })
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    });