const mongoose = require("mongoose");
let initData = require("./data.js");
const Listing = require("../models/listing.js");

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

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "686e16aa426412e0b7f200e6"}));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
}

initDB();