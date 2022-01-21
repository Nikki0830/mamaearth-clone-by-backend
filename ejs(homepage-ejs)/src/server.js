const express = require("express");
const app = express();
const connect = require("../src/configs/db");
const homeController = require("../src/controllers/home.controller");
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/home", homeController);

app.listen(8080, async () => {
  await connect();
  console.log("connected to port 8080");
});
