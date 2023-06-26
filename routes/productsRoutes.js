const express = require('express');
const routes = express.Router();
const multer = require('multer');

const productsController = require('../controllers/productsControllers');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb (null, './public/images/products');
    },

    filename: function (req, file, cb){
        cb (null, `img-${req.body.type}-${Date.now()}-${file.originalname}`);
    },
})

const uploadFile = multer({storage});


//Get vender form view
routes.get('/vender', productsController.getProductPublicationForm);


//Post product obtained from vender form
routes.post('/vender-producto', uploadFile.single('image'), productsController.createProduct);


module.exports = routes;