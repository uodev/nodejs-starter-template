const { verifyToken } = require("../../helpers/jwtHelper");

const currentUser = (req, res, next) => {
  //! Cookies de eğer token varsa req.user ekle yok ise next devam et!
  const token = req.cookies.jwt;
  if (!token) next();
  const user = verifyToken(token);

  req.user = user;
  console.log("INFO: Current User Middleware", req.user);
  next();
};
