const path = require('path');
//const productFilePath = path.resolve('../mercadoliebre/dataBase/productsDataBase.json');
const fs = require('fs');

const models = {

    //Products database route

  //  route: '../dataBase/productsDataBase.json',

    //Find all products available on the JSON database

    findAll: function () {
        const productsJSON = fs.readFileSync(`./dataBase/productsDataBase.json` , 'utf-8')
        const products = JSON.parse(productsJSON);

        return products;
    },

    //Create a new product on the JSON database
    
    createOne: function (newProduct) {

        let products = this.findAll();

        newProduct.id = products[products.length - 1].id + 1;

        products.push(newProduct);

        const productsJSON = JSON.stringify(products, null, " ");

        fs.writeFileSync(`./dataBase/productsDataBase.json`, productsJSON);

       
    }


}

module.exports = models;