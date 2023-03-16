const getBearerToken = require("../../helpers/getBearerToken");
const { NotFound } = require("../../utils/response");

const authorization = (req, res, next) => {
  //! User route girerken token var mı diye kontrol et!
  const token = getBearerToken(req, res);
  if (token === null) return NotFound(res, "No token provided");

  console.log("INFO: Authorization Middleware", token);
  next();
};

module.exports = authorization;
