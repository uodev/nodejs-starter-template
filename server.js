const express = require("express");
const errorHandler = require("./middlewares/errors/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(errorHandler);

module.exports = app;
