const express = require("express");
const healthRouter = require("../routes/health");
const usersRouter = require("../routes/api/users");
const authRouter = require("../routes/api/auth");
const listingsRouter = require("../routes/api/Listings");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", healthRouter);
  app.use("/api/user", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/listing", listingsRouter);
};
