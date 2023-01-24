const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        userId: {type: String, required:true},
        products: [
            {
                produciId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: {type: Number, required: true},
        address: {type: String, required: true}, 
        status: {type: String, default: "pending"},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);