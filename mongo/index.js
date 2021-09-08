const mongoose = require("mongoose");

const makeConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = Object.freeze({ makeConnection });
