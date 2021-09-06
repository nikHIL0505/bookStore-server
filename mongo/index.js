const mongoose = require("mongoose");

const makeConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nikhil05:bookStoreApp@cluster0.rjuqf.mongodb.net/bookStoreDB?retryWrites=true&w=majority"
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = Object.freeze({ makeConnection });
