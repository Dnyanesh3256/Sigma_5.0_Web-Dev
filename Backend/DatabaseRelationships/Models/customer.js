const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successful!")).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


//One to Many
const orderSchema = new Schema({
    item: String,
    price: Number
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
    // let cust1 = new Customer({
    //     name: "Ishant Sharma"
    // });

    // let order1 = await Order.findOne({ item: "Chips" });
    // let order2 = await Order.findOne({ item: "Chocolate" });

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);

    // let res = await cust1.save();
    // console.log(res);
// }

addCustomers();


// const addOrders = async () => {
//     let res = await Order.insertMany([
//             { item: "Chips", price: 10 },
//             { item: "Samosa", price: 12 },
//             { item: "Chocolate", price: 40 }
//         ]);

//     console.log(res);
// }

// addOrders();