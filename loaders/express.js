const express = require("express");
const cors = require("cors");

const expressLoader = (app) => {
  app.get("/status", (req, res) => {
    res.status(200).send("Server is running").end();
  });
};
module.exports = expressLoader;
