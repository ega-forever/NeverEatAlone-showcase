/**
 *
 * @controller user handler ctrl
 */

var config = require('../config/'),
    User = require('../models/userModel'),
    q = require('Q');


var find = function (user) {


    var deferred = q.defer();

    User.findOne(user, function (err, userDb) {
        if (userDb == null) {
            return deferred.reject();
        } else {
            return deferred.resolve(userDb);
        }
    });

    return deferred.promise;

};


module.exports = {
    find: find
};