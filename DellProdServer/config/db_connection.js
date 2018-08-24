const mongoose = require('mongoose')
const mongoDB = 'mongodb://umaniax:hello1234@ds125342.mlab.com:25342/dellprod'
mongoose.connect(mongoDB)
mongoose.Promise = Promise

module.exports.ProductData = require('../model/products')