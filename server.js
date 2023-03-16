const express = require("express");
const errorHandler = require("./middlewares/errors/errorHandler");
const limiter = require("./helpers/rateLimitHelper");
const cors = require("cors");
const helmet = require("helmet");
const router = require("./routers/index");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const currentUser = require("./middlewares/auth/currentUser");

//global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(currentUser);

//routes
app.use("/api", router);

//error handler
app.use(errorHandler);

module.exports = app;
