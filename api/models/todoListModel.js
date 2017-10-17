'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({

    amount: {
        type: String,
        Required: 'true'
    },
    category: {
        type: String,
        Required: 'true'
    },

    desc: {
        type: String,
        Required: 'true'
    },

    day: {
        type: String,
        Required: 'true'
    },
    month: {
        type: String,
        Required: 'true'
    },
    year: {
        type: String,
        Required: 'true'
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
    }],
        default: ['pending']
    }
});


module.exports = mongoose.model('Tasks', TaskSchema);