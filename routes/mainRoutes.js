const express = require('express');
const routes = express.Router();
const mainController = require('../controllers/mainControllers');

//Get home view

routes.get('/', mainController.getHome);


module.exports = routes;