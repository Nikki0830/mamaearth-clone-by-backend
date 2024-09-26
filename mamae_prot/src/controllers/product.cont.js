const express = require('express')
const router = express.Router();
const Product = require('../models/products')

router.post('/',async(req,res)=>{
    try{
        let prod = await Product.create(req.body)
        return res.status(200).send(prod)
    }
    catch(err){
        return res.status(400).send(err)
    }
});

router.get('/',async(req,res)=>{
    try{
   let prod = await Product.find().lean().exec()
   return res.status(200).send(prod)
    }catch(err){
   return res.status(400).send(err)
    }
});

router.get('/ht',async(req,res)=>{
    const products = await Product.find().lean().exec()
    return res.render("products/product",{
        products,
    })
})

module.exports = router;