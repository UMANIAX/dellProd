const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const customerMetaSchema = new Schema({

    username: {type: String, required: true},
    password: {type: String},
    productsBought: [
        {
            asin: {type: String},
            review: {type: String, default: null},
            complaint: {
                placedOn: {type: Date, default: null},
                issue: {type: String, default: null},
                feedbackRating: {type: Number, default: null},
                onGoing: {type: Boolean, default: false}
            },
        }
    ],
})

customerMetaSchema.pre('save', function (next) {

    let user = this

    bcrypt.hash(user.password, 10, function (err, hash) {

        user.password = hash
        next()
    })
})

CustomerMetaModel = mongoose.model('customermeta', customerMetaSchema)
module.exports = CustomerMetaModel