const mongoose = require('mongoose')
const mongoDB = 'mongodb://umaniax:umianu1234@ds125342.mlab.com:25342/dellprod'
mongoose.connect(mongoDB)
mongoose.Promise = Promise