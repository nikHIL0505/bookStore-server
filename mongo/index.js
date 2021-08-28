const mongoose = require("mongoose");

const makeConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:23017", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = Object.freeze({ makeConnection });
