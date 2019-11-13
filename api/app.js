'use strict';
/**
 * This function exports model and routes
 */
module.exports = function (app) {
    //Initialize models
    let userSchema = require('./models/userSchema');
    let animalSchema = require('./models/animalSchema');
    let eventSchema = require('./models/eventSchema');
    //Initialize routes
    let animalRoutes = require('./routes/animal-route');
    let eventRoutes = require('./routes/event-route');
    let userRoutes = require('./routes/user-route');
    animalRoutes(app);
    eventRoutes(app);
    userRoutes(app);
};