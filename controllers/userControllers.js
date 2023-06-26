const controller = {

	getLogin: (req, res) => {
		return res.render('userViews/login', { title: "Login" });
	
	},

	getRegister: (req, res) => {
		return res.render('userViews/register', { title: "Registro" });
	},

}

module.exports = controller;