const express = require("express")
const app = express();
const connect = require("../src/configs/db")
const prodController = require('../src/controllers/product.cont')
const homeController = require("../src/controllers/home.controller");
const IPController = require("../src/controllers/IndivPage.controller");
const cartController = require("../src/controllers/cart.controller");
const paymentController = require("../src/controllers/payment.controller");
const finController = require("../src/controllers/finalPg.controller");
const loginController = require("../src/controllers/login.controller");
const signupController = require("../src/controllers/signup.controller");

app.use(express.json());
app.use(express.static("public"));
app.set("view engine","ejs");

app.use("/product",prodController)
app.use("/home", homeController);
app.use('/Iprod',IPController)
app.use('/cart',cartController)
app.use('/payment',paymentController)
app.use('/fin',finController)
app.use('/login',loginController)
app.use('/signup',signupController)

app.listen(8080, async()=>{
    await connect();
    console.log("connected to port 8080")
})
