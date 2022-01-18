const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        imgUrl : [{type: String, required: true }],
        title :{type: String, required: true },
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

const Product = mongoose.model("products",userSchema);
module.exports = Product;
