const status = require("../errors/index");

const Ok = (res, data) => {
  return res.status(status.Ok).json({
    success: true,
    data: data || {},
  });
};

const Created = (res, data) => {
  return res.status(status.Created).json({
    success: true,
    data: data || {},
  });
};

const NoContent = (res) => {
  return res.status(status.NoContent).json({
    success: true,
    data: {},
  });
};

const BadRequest = (res, message) => {
  return res.status(status.BadRequest).json({
    success: false,
    message: message || "Bad Request",
  });
};

const Unauthorized = (res, message) => {
  return res.status(status.Unauthorized).json({
    success: false,
    message: message || "Unauthorized",
  });
};

const Forbidden = (res, message) => {
  return res.status(status.Forbidden).json({
    success: false,
    message: message || "Forbidden",
  });
};

const NotFound = (res, message) => {
  return res.status(status.NotFound).json({
    success: false,
    message: message || "Not Found",
  });
};

const Conflict = (res, message) => {
  return res.status(status.Conflict).json({
    success: false,
    message: message || "Conflict",
  });
};

const InternalServerError = (res, message) => {
  return res.status(status.InternalServerError).json({
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
