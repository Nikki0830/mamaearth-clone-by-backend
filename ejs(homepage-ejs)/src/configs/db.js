const mongoose = require("mongoose");

module.exports = connect = () => {
  return mongoose.connect(
    "mongodb+srv://mamaearth:<mamaearth123>@mamaearth-fullstack.qvqsp.mongodb.net/test"
  );
};
