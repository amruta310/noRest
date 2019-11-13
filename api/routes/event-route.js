
'use strict';
module.exports = function (app) {
    const Controller = require('../controllers/event_controller');
    
    app.route('/event')
        .get(Controller.list)
        .post(Controller.post);

 
    app.route('/event/:id')
        .get(Controller.get)
        .put(Controller.put)
        .delete(Controller.delete);
};