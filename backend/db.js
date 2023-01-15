const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/enotebook";

mongoose.set("strictQuery", false);

const connectToMongo = async () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongoose successfully");
  });
};

module.exports = connectToMongo;
