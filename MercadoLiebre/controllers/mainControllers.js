const productModel = require('../models/products');

const controller = {

    getHome: (req, res) => {

        const products = productModel.findAll();

        //console.log(products[0].image)

        return res.render('mainViews/home', {

            title: 'Products',
            products,

        });
    },

}

module.exports = controller;