const express = require("express");
const Router = express.Router();
const AuthController = require("../../controllers/v1/AuthController");

Router.post("/login", AuthController.login);

module.exports = Router;
