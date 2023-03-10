const getBearerToken = require("../../helpers/getBearerToken");
const status = require("../../utils/errors/index");

const authorization = (req, res, next) => {
  const token = getBearerToken(req, res);
  if (token === null)
    return res
      .status(status.NotFound)
      .json({ message: "No token provided", statusCode: status.NotFound });
    
  next();
};

module.exports = authorization;
