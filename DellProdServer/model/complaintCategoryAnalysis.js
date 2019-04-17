const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerComplaintAnalysisSchema = new Schema({

    low: {
        c1: {type: String, default: 0},
        c2: {type: String, default: 0},
        c3: {type: String, default: 0}
    },
    medium: {
        c1: {type: String, default: 0},
        c2: {type: String, default: 0},
        c3: {type: String, default: 0}
    },
    high: {
        c1: {type: String, default: 0},
        c2: {type: String, default: 0},
        c3: {type: String, default: 0}
    }
})

CustomerComplaintAnalysisModel = mongoose.model('customercomplaintanalysis', customerComplaintAnalysisSchema)
module.exports = CustomerComplaintAnalysisModel