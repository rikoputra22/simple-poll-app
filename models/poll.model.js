const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    votes: { type: Number, default: 0 }
});

const pollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [optionSchema]
});

module.exports = mongoose.model('Poll', pollSchema);