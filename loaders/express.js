const express = require("express");
const cors = require("cors");
const routes = require("../apis");

const expressLoader = (app) => {
  app.get("/status", (req, res) => {
    res.status(200).send("Server is running").end();
  });
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes());
};
module.exports = expressLoader;
