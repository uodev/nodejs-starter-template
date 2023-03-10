const getBearerToken = require("../../helpers/getBearerToken");
const status = require("../../utils/errors/index");

const authorization = (req, res, next) => {
  //! User route girerken token var mı diye kontrol et!
  const token = getBearerToken(req, res);
  if (token === null)
    return res
      .status(status.NotFound)
      .json({ message: "No token provided", statusCode: status.NotFound });

  console.log("INFO: Authorization Middleware", token);
  next();
};

module.exports = authorization;
