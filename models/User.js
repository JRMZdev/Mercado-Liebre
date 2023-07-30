const path = require('path');
const fs = require('fs');
const userFilePath = path.resolve('../mercadoliebre/dataBase/usersDataBase.json');
const uuid = require('uuid');

const models = {

   // route: '../database/usersDataBase.json',

    findAll: function () {
        const usersJSON = fs.readFileSync(userFilePath, 'utf-8')
        const users = JSON.parse(usersJSON);

        return users;
    },

    findByField: function (field, value) {

        let users = this.findAll();

        let user = users.find(item => item[field] === value);

        (!user) ? user = null : user;

        return user;

    },
    
    createOne: function (newUser) {

        let users = this.findAll();

        newUser.id = uuid.v4();

        users.push(newUser);

        const usersJSON = JSON.stringify(users, null, ' ');

        fs.writeFileSync(userFilePath, usersJSON);

        return newUser;
    },

}

module.exports = models;