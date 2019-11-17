
'use strict';

const mongoose = require('mongoose'),
    Comment = mongoose.model('Comments');

    exports.search = function (params) {
        const promise = Comment.find(params).exec();
        return promise;
    };

    exports.save = function (Comment) {
        const newComment = new Comment(Comment);
        const promise = newComment.save();
        return promise;
    };

    exports.get = function (commentId) {
        const promise = Comment.findById(commentId).exec();
        return promise
    };

    exports.update = function (Comment) {
        Comment.modified_date = new Date();
        const promise = Comment.findOneAndUpdate({_id: Comment._id},Comment).exec();
        return promise;
    };


    exports.delete = function (commentId) {
        const promise = Comment.remove({_id: commentId});
        return promise;
    };