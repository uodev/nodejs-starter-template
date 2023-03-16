const express = require("express");
const errorHandler = require("./middlewares/errors/errorHandler");
const limiter = require("./helpers/rateLimitHelper");
const cors = require("cors");
const helmet = require("helmet");
const router = require("./routers/index");
require("dotenv").config({ path: "./config/.env" });
const app = express();

//global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(cors());
app.use(helmet());

//routes
app.use("/api", router);

//error handler
app.use(errorHandler);

module.exports = app;
