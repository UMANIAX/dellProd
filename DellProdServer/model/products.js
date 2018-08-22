const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    asin: {type: String},
    imgURL: {type: String},
    description: {type: String},
    categories: {type: String}
})