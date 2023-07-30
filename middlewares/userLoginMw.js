const userModel = require('../models/User.js');

function userLoginMw(req, res, next) {
    
    res.locals.isLogged = false; 

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = userModel.findByField('email', emailInCookie); 

    if (!emailInCookie) {
        return next()
    }

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    };
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next();
}

module.exports = userLoginMw;