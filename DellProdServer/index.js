const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db_connection')

app.use(bodyParser.urlencoded({extended: false})) // get information from html forms
app.listen(process.env.PORT || 8080)

app.get('/data/:id', async function (req, res) {

    const products = await db.ProductData.find()
    const customerMeta = await db.CustomerMetaData.findOne({username: req.params.id})
    const customerML = await db.CustomerMLData.findOne({username: req.params.id})
    res.send({products, customerMeta, customerML})
})

app.post('/sessionData', function (req, res) {

    console.log(req.body)
    res.send('cool')
})

// app.get('/putData', function (req, res) {
//
//     const customerMetaEntry = {
//         username: 'umaniax',
//         password: 'hello1234',
//         productsBought: []
//     }
//
//     const customerMLEntry = {
//         username: 'umaniax'
//     }
//
//     const newCustomerMeta = new db.CustomerMetaData(customerMetaEntry)
//     const newCustomerML = new db.CustomerMLData(customerMLEntry)
//
//     newCustomerMeta.save()
//     newCustomerML.save()
//
//     res.send('Done')
// })
