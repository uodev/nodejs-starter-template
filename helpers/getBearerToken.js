const status = require("../utils/errors/index");

const getBearerToken = (req, res) => {
  const authHeader = req.get("Authorization") || null;
  if (authHeader === null)
    return res
      .status(status.NotFound)
      .json({ message: "No token provided", statusCode: status.NotFound });
  return authHeader.replace("Bearer ", "");
};

module.exports = getBearerToken;
