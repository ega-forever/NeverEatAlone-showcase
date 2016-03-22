var AuthService = require('../services/authService'),
    bodyParser = require('body-parser');


/**
 *
 * @param app - express instance
 * @function - create routes for app
 */

var messageFactory = require('../factories/messageFactory'),
    messageModel = require('../models/messageModel');

module.exports = function(app) {


    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/auth', function (req, res) {

        AuthService.authenticate({name: req.body.name, password: req.body.password}).then(function (data) {
            res.json(new messageModel(data));
        }).fail(function (err) {
            res.json(new messageModel(err, "fail"));
        })
    });

    app.get('/', AuthService.isAuthed, function(req, res){

        res.send(new messageModel(messageFactory.authMessages.authed));

    });


};