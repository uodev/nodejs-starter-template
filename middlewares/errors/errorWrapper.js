const errorWrapper = (fn) => (req, res, next) => {
  //! bir error var ise next'e gönder!

  try {
    fn(req, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = errorWrapper;
