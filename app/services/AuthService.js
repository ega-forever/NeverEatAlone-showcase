/**
 *
 * @Service AuthHandle interceptors
 */

var q = require('Q'),
    jwt = require('jsonwebtoken'),
    config = require('../config'),
    userActions = require('../controllers/userCtrl'),
    messageFactory = require('../factories/messageFactory'),
    messageModel = require('../models/messageModel');

var authenticate = function (user) {

    var deferred = q.defer();

    if (user.name == null || user.password == null) {
        deferred.reject(messageFactory.authMessages.wrongCredentials);
        return deferred.promise;

    }

    userActions.find(user).then(function (userDb) {
        deferred.resolve(generateToken(userDb));
    }).fail(function(){deferred.reject(messageFactory.authMessages.wrongCredentials)});


    return deferred.promise;
};

function isAuthed(req, res, next) {
    if (req.headers['x-access-token']) {
        jwt.verify(req.headers['x-access-token'], config.secret, function (err, decoded) {
            if (err) {
                return res.send(new messageModel(messageFactory.authMessages.tokenFailed, "fail"));
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send(new messageModel(messageFactory.authMessages.noToken, "fail"));
    }

}


function generateToken(user) {
    var token = jwt.sign(user, config.secret, {
        expiresInMinutes: 1440
    });
    return {token: token};
}

module.exports = {
    authenticate: authenticate,
    isAuthed: isAuthed,
    generateToken: generateToken
};