const express = require("express");
const authRoutes = require("./routes/auth/auth");

const routes = () => {
  const app = express();
  authRoutes(app);
  return app;
};

module.exports = routes;
