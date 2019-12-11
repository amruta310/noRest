'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
let eventSchema = new Schema({
    title: {
        type: String,
        required: "name is required"
    },
    description: {
        type: String,
        required: "description is required"
    },
    location: {
        type: String,
        required: "location is required"
    },
    date: {
        type: Date,
        required: "date is required"
    },
    amount: {
        type: Number,
        required: "amount is required"
    },

    title: {
        type: String,
        required: "title is required"
    },
    
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
eventSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
eventSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Events', eventSchema);