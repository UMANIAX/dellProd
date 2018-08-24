const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db_connection')

app.use(bodyParser.urlencoded({extended: false})) // get information from html forms
app.listen(process.env.PORT || 8080)

app.get('/productData', async function (req, res) {

    const productData = await db.ProductData.find()
    res.send(productData)
})

// app.get('/putData', function (req, res) {
//
//     const insertData = [
//         {
//             'asin': '1685560148',
//             'title': 'Bass Xpansion System',
//             'description': 'Lets you enjoy your favorite music in high-quality sound.  Expandable BXS (Bass Xpansion system) enhances the sound effect.',
//             'price': 33.95,
//             'imUrl': 'http://ecx.images-amazon.com/images/I/41vADnGa7PL._SX300_.jpg',
//             'categories': 2
//         }
//     ]
//
//     insertData.forEach(item => {
//
//         const newData = new db.ProductData(item)
//         newData.save()
//     })
//
//     res.send('Done')
// })
