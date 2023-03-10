const getBearerToken = require("../../helpers/getBearerToken");
const status = require("../../utils/errors/index");
const {createToken} = require("../../helpers/jwtHelper");

const currentUser = (req, res, next) => {
    //! Hali hazırda user var mı yok mu onu kontrol ediyoruz!
    
    next();
    }