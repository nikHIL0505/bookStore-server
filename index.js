const express = require("express");
const logger = require("./loaders/logger");
const Loader = require("./loaders");

const startserver = async () => {
  const app = express();
  await Loader({ expressApp: app });

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });
};

startserver();
