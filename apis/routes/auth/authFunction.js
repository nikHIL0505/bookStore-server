const express = require("express");
const { encryptPass } = require("../../../loaders/bcrypt");
const SellerModel = require("../../../mongo/models/User/sellerModel");
const logger = require("../../../loaders/logger");
const makeHTTPResponse = require("../../../helpers/makeHTTPresponse");

const login = async (req, res) => {};

const register = async (req, res) => {
  try {
    let info = {
      username: req.body.username.toLowerCase(),
      firstname: req.body.firstname.toLowerCase(),
      lastname: req.body.lastname.toLowerCase(),
      email: req.body.email.toLowerCase(),
      address: req.body.address.toLowerCase(),
      organization: req.body.organization.toLowerCase(),
    };
    info["password"] = await encryptPass(req.body.password);
    let newUser = new SellerModel(info);
    await newUser.save();
    makeHTTPResponse({
      res,
      status: 200,
      body: { message: "success" },
    });
  } catch (err) {
    logger.error(err);
    makeHTTPResponse({
      res,
      status: 500,
      body: { message: "Internal Server Error" },
    });
  }
};

module.exports = Object.freeze({ register, login });
