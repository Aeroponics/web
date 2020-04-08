const express = require('express')
const app = express();  // new express app
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

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
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*", (req,res) =>  {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
  }

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, err => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Server started on port ${port}`)
}) 

