const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
  }
};

module.exports=connectDB();