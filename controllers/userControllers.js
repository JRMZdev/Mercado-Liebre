const fs = require('fs');
const path = require('path');
const userModel = require('../models/User.js');


const controller = {

	getLogin: (req, res) => {
		return res.render('userViews/login', { title: "Login" });	
	},


	getRegister: (req, res) => {
		return res.render('userViews/register', { title: "Registro" });
	},

	registerUser: (req, res) => {

		const user = req.body;

		user.user_image = req.file ? req.file.filename : "default-user-photo.png";

		userModel.createOne(user);

		return res.redirect('/');

	},

	loginUser: (req, res) => {

		let user = userModel.findByField('email', req.body.email);


		if (!user) {
			user = userModel.findByField('user_name', req.body.email);
		}

		const passwordMatch = req.body.password == user.password;

		if (passwordMatch) {
			userToLoggin = userModel.findByField('email', user.email);
			req.session.userLogged = userToLoggin;
			res.cookie('userEmail', user.email, { maxAge: 24 * 60 * 60 * 1000 });
		}

		return res.redirect('/');
	},

	getLogout: (req, res) => {
		req.session.destroy();
		res.clearCookie('userEmail');
		return res.redirect('/');
	},


}

module.exports = controller;