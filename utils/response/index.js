const Ok = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data || {},
  });
};

const Created = (res, data) => {
  return res.status(201).json({
    success: true,
    data: data || {},
  });
};

const NoContent = (res) => {
  return res.status(204).json({
    success: true,
    data: {},
  });
};

const BadRequest = (res, message) => {
  return res.status(400).json({
    success: false,
    message: message || "Bad Request",
  });
};

const Unauthorized = (res, message) => {
  return res.status(401).json({
    success: false,
    message: message || "Unauthorized",
  });
};

const Forbidden = (res, message) => {
  return res.status(403).json({
    success: false,
    message: message || "Forbidden",
  });
};

const NotFound = (res, message) => {
  return res.status(404).json({
    success: false,
    message: message || "Not Found",
  });
};

const Conflict = (res, message) => {
  return res.status(409).json({
    success: false,
    message: message || "Conflict",
  });
};

const InternalServerError = (res, message) => {
  return res.status(500).json({
    success: false,
    message: message || "Internal Server Error",
  });
};

module.exports = {
  Ok,
  NoContent,
  NotFound,
  Created,
  InternalServerError,
  BadRequest,
  Unauthorized,
  Forbidden,
  Conflict,
};
