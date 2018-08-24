const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({

    userId: {type: String, required: true},
    c1: {type: Number, default: 0},
    c2: {type: Number, default: 0},
    c3: {type: Number, default: 0},
    p1: {type: Number, default: 0},
    p2: {type: Number, default: 0},
    p3: {type: Number, default: 0},
    reviewSentiment: {type: Number, default: 0},
    serviceFeedbackSentiment: {type: Number, default: 0},
    productsBought: [
        {
            asin: {type: String},
            review: {type: String, default: null},
            complaint: {
                placedOn: {type: Date, default: null},
                issue: {type: String, default: null},
                feedback: {type: String, default: null}
            },
            rating: {type: Number, default: null}
        }
    ],
    isModified: {type: Boolean, default: false}
})

CustomerModel = mongoose.model('customer', customerSchema)
module.exports = CustomerModel