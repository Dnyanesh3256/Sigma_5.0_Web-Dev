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

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

// customerSchema.post("findOneAndDelete", async () => {
//     console.log("POST MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
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

// addCustomers();


// const addOrders = async () => {
//     let res = await Order.insertMany([
//             { item: "Chips", price: 10 },
//             { item: "Samosa", price: 12 },
//             { item: "Chocolate", price: 40 }
//         ]);

//     console.log(res);
// }

// addOrders();

// const addCutsomer = async () => {
//     let newCustomer = new Customer({
//         name: "Ajay Mathur"
//     });

//     let newOrder = await Order.findById("68690e80bc01aa110ff7b4a1");

//     newCustomer.orders.push(newOrder);

//     await newOrder.save();
//     await newCustomer.save();

//     console.log("Customer added!");
// };

// addCutsomer();

const deleteCustomer = async () => {
    let res = await Customer.findByIdAndDelete("686a3d9ef1603342ef83b651");
    console.log(res);
};

deleteCustomer();