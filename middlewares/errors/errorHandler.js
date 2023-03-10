const {InternalServerError} = require("../utils/response/index");

const errorHandler = (err, req, res, next) => {
  //! Error'lara göre response döndür eklenecek!
  let customError = err;

  console.log(customError);
  return InternalServerError(res, customError);
};

module.exports = errorHandler;
