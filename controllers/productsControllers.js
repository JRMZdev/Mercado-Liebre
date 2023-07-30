const fs = require('fs');
const path = require('path');
const productModel = require('../models/products');

const controller = {

    getProductPublicationForm: (req, res) => {
        res.render('productsViews/vender')
    },

    createProduct: (req, res) => {
        let productData = req.body;

        productData.title = productData.title
        productData.price = Number(productData.price);
        productData.discount = Number(productData.discount);
        productData.image = req.file ? "/images/products/" + req.file.filename : "/images/products/default-product-image.";

        productModel.createOne(productData);

        res.redirect('/');
    },

    getProducts: (req, res) => {
        const products = productModel.findAll();

        res.render('/', {
            title: 'Products',
            products
        });
    },
};


module.exports = controller;