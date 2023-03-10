const errorWrapper = (fn = (req, res, next) => {
  try {
    fn(req, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = errorWrapper;
