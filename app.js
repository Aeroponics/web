require('dotenv').config()
const express = require('express')
const app = express();  // new express app
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const MongoURI = `mongodb+srv://somamizobuchi:${process.env.MONGODB_PASS}@aeroponics-yybbg.mongodb.net/`
console.log(MongoURI)
mongoose.connect(MongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Hello')
})

app.post('/api/', (req, res) => {

})

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, err => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Server started on port ${port}`)
}) 