const jwt = require("../../loaders/jwt");
const SellerModel = require("../models/User/sellerModel");

const getUserById = async (id) => {
  const user = await SellerModel.findById(id, "email").lean();
  return user;
};

const getLoginCredentials = async (username) => {
  console.log("Jo");
  await console.log(username);
};

module.exports = Object.freeze({
  getUserById,
  getLoginCredentials,
});
