
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

//Get user forms

router.get('/login', userController.getLogin); 
router.get('/register', userController.getRegister);


module.exports = router;

