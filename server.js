const express = require('express')
const app = express();  // new express app
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const plantRouter = require('./routers/plantRouter')

require('dotenv').config()
// Connect to database
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to database')
})

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, err => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Server started on port ${port}`)
}) 

// Middleware
app.use(bodyparser.json())

// Routes
app.use('/plant', plantRouter, (req, res, next) => {
    next()
})

