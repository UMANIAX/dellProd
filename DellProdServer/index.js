const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db_connection')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(process.env.PORT || 8080)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/data/:id', async function (req, res) {

    const products = await db.ProductData.find()
    const customerMeta = await db.CustomerMetaData.findOne({username: req.params.id})
    const customerML = await db.CustomerMLData.findOne({username: req.params.id})
    res.send({products, customerMeta, customerML})
})

app.post('/sessionData', async function (req, res) {

    let {products, customerML, customerMeta} = req.body

    await products.forEach(item => db.ProductData.findOneAndUpdate({asin: item.asin}, products))
    await db.CustomerMLData.findOneAndUpdate({username: customerML.username}, customerML)

    await customerMeta.productsBought.forEach(async item => {

        if (item.complaint && !item.complaint.isNew) {

            const complaint = {
                username: customerMeta.username,
                asin: item.asin,
                complaintText: item.complaint.issue,
                onGoing: item.complaint.onGoing,
                feedbackRating: item.complaint.feedbackRating,
                issuedAt: item.complaint.placedOn,
                complaintId: item.complaint.id
            }

            await db.ComplaintData.findOneAndUpdate({complaintId: item.complaint.id}, complaint)
        }
    })

    customerMeta.productsBought = customerMeta.productsBought.map(item => {

        if (item.complaint) {

            const complaint = {
                username: customerMeta.username,
                asin: item.asin,
                complaintText: item.complaint.issue,
                onGoing: item.complaint.onGoing,
                feedbackRating: item.complaint.feedbackRating,
                issuedAt: item.complaint.placedOn,
                complaintId: item.complaint.id
            }

            if (item.complaint.isNew) {

                const newEntry = new db.ComplaintData(complaint)
                newEntry.save()
                item.complaint.isNew = false
            }
        }

        return item
    })

    await db.CustomerMetaData.findOneAndUpdate({username: customerMeta.username}, customerMeta)

    res.send('cool')
})

app.post('/login', async function (req, res) {

    const {user} = req.body
    const data = await db.CustomerMetaData.findOne({username: user})

    if (data)
        res.send(user)

    else
        res.send(null)
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
