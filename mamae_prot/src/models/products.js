const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const productSchema = new mongoose.Schema(
    {
        title :{type: String, required: true },
        imgUrl : [{type: String, required: true }],
        description:{type: String, required: false },
        category : {type: String, required: false },
        rating : {type: String, required: true },
        price : {type: Number, required: true }, 
    },
    {
        versionKey:false,
        timestamps: true,
    }
);

const Product = mongoose.model("product",productSchema);
module.exports = Product;
