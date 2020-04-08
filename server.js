const express = require('express')
const app = express();  // new express app
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const plantRouter = require('./routers/plantRouter')
const userRouter = require('./routers/user')

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


// Middleware
app.use(bodyparser.json())
app.use(cookieParser())
app.use(cors())

// Routes
app.use('/plant', plantRouter)
app.use('/user', userRouter)

// Set node environment
if(process.env.NODE_ENV == "production"){
    express.static(path.join(__dirname, "client", "build"))
}

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, err => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Server started on port ${port}`)
}) 

