const { comparePassword } = require("../../../loaders/bcrypt");
const SellerModel = require("../../../mongo/models/User/sellerModel");
const logger = require("../../../loaders/logger");
const makeHTTPResponse = require("../../../helpers/makeHTTPresponse");
const authQueries = require("../../../mongo/queries/authQueries");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    let queryRes = await authQueries.getLoginCredentials(
      username.toLowerCase()
    );

    if (!queryRes.user) {
      makeHTTPResponse({
        res,
        status: 400,
        body: { message: "Invalid User Credentials !" },
      });
    }

    const isPasswordMatch = comparePassword(password, queryRes.user.password);

    if (!isPasswordMatch) {
      makeHTTPResponse({
        res,
        status: 400,
        body: { message: "Invalid User Credentials.!" },
      });
    }

    makeHTTPResponse({
      res,
      status: "200",
      body: { message: "success" },
    });
  } catch (err) {
    console.log(err);
    makeHTTPResponse({
      res,
      status: 500,
      body: { message: "Internal Server Error." },
    });
  }
};

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
