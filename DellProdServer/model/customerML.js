const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerMLSchema = new Schema({

    username: {type: String, required: true, unique: true},
    c1: {type: Number, default: 0},
    c2: {type: Number, default: 0},
    c3: {type: Number, default: 0},
    p1: {type: Number, default: 0},
    p2: {type: Number, default: 0},
    p3: {type: Number, default: 0},
    reviewSentiment: {type: Number, default: 0},
    reviewCount: {type: Number, default: 0},
    serviceFeedbackSentiment: {type: Number, default: 0},
    feedbackCount: {type: Number, default: 0},
    isAltered: {type: Boolean, default: false},
    finalSentiment: {type: Number, default: 0}
})


CustomerMLModel = mongoose.model('customerml', customerMLSchema)
module.exports = CustomerMLModel