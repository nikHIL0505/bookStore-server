const dotenv = require("dotenv");
const mongoDB = require("../mongo");
const logger = require("./logger");
const expressLoader = require("./express");

const Loader = async ({ expressApp }) => {
  expressLoader(expressApp);

  logger.info("Express Loaded");
  dotenv.config();
  logger.info("Env variables loaded");

  const dbConnection = await mongoDB.makeConnection();

  if (dbConnection) {
    logger.info("Database successfully connected.");
  } else {
    logger.error("Error while connecting database!!");
  }
};

module.exports = Loader;
