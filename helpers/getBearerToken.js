const { NotFound } = require("../utils/response");

const getBearerToken = (req, res) => {
  const authHeader = req.get("Authorization") || null;
  if (authHeader === null) return NotFound(res, "No token provided");
  return authHeader.replace("Bearer ", "");
};

module.exports = getBearerToken;
