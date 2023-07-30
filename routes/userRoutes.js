
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

//Get user forms

router.get('/login', userController.getLogin); 
router.get('/register', userController.getRegister);
router.get('/logout', userController.getLogout);  

// Post User forms

router.post('/register', userController.registerUser);
router.post('/user-session', userController.loginUser); 


module.exports = router;

