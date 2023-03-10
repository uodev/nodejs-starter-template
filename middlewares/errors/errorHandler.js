const {InternalServerError} = require("../utils/response/index");

const errorHandler = (err, req, res, next) => {
  let customError = err;

  console.log(customError);
  return InternalServerError(res, customError);
};

module.exports = errorHandler;
