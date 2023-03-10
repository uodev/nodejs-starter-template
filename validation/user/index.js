const { body,validationResult } = require("express-validator");
const status = require('../../utils/errors/index')

//! basic validation for user
exports.user_validation = [
    body("email").exists().withMessage("Email is required").isEmail().withMessage("Email is not valid"),
    body("password").exists().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("fullname").exists().withMessage("Fullname is required"),

    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(status.BadRequest).json({ errors: errors.array() });
        }
        next();
    }
]