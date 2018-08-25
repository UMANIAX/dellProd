const mongoose = require('mongoose')
const Schema = mongoose.Schema

const complaintSchema = new Schema({

    userId: {type: String, required: true},
    asin: {type: String, required: true},
    complaintText: {type: String, default: null},
    onGoing: {type: Boolean, default: false},
    feedbackRating: {type: Number, default: null},
    issuedAt: {type: Date, default: null}
})


complaintModel = mongoose.model('complaint', complaintSchema)
module.exports = complaintModel