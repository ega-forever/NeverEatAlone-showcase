/**
 *
 * @controller load sample data to mongoose
 */

var config = require('../config/'),
    User = require('../models/userModel'),
    messageFactory = require('../factories/messageFactory'),
    messageModel = require('../models/messageModel');


module.exports = function () {


    User.findOne(config.demoUser.name, function (err, user) {
        if (user == null) {

            var userSet = new User(config.demoUser);

            userSet.save(function (err) {
                if (err) throw err;

                console.log(new messageModel(messageFactory.actionMessages.userSave));
            });


        }
    });


}

