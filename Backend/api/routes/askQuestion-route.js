'use strict';
module.exports = function (app) {
    const askQuestionController = require('../controllers/askQuestion-controller');
    app.route('/questions')
        .get(askQuestionController.list)
        .post(askQuestionController.post);
};