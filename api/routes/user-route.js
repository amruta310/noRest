

'use strict';
module.exports = function (app) {
    const Controller = require('../controllers/user_controller');
    
    app.route('/user')
        .get(Controller.list)
        .post(Controller.post);

 
    app.route('/user/:id')
        .get(Controller.get)
        .put(Controller.put)
        .delete(Controller.delete);
};