/**
 *
 * @type Entry point
 */

var express = require('express'),
    app = express(),
    routes = require('./app/routes'),
    dataSeed = require('./app/controllers/dataSeed'),
    mongoose = require('mongoose'),
    config = require('./app/config');


/** seeding demo user data **/
dataSeed();

/** init routes **/
routes(app);

/**connect to mongoose **/
mongoose.connect(config.database);


/**start app **/
app.listen(3000, function () {
    console.log('demo app listening on port 3000!');
});