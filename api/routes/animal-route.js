

'use strict';
module.exports = function (app) {
    const Controller = require('../controllers/animal_controller');
    
    app.route('/animals')
        .get(Controller.list)
        .post(Controller.post);

 
    app.route('/animals/:id')
        .get(Controller.get)
        .put(Controller.put)
        .delete(Controller.delete);
};