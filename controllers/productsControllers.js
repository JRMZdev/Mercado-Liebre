const productModel = require('../models/products');

const controller = {

    getProductPublicationForm: (req, res) => {

        res.render('productsViews/vender')

    },

    createProduct: (req, res) => {
        let newData = req.body;

        newData.price = Number(newData.price);
        newData.discount = Number(newData.discount);
        newData.image = req.file ? req.file.filename : "default-product-image.jpg";

        productModel.createOne(newData);

        res.redirect('/');
    }
};



module.exports = controller;