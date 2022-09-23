const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
  const db = process.env.DB;
  mongoose
    .connect(db, { useUnifiedTopology: false })
    .then(() => console.log(`Connected to MongoDb at ${db}`));
};
