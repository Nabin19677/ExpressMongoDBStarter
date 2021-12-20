const express = require("express");

const authRouter = require("./auth.route");

const app = express();

app.use("/auth", authRouter);

module.exports = app;
