const express = require('express')
const app = express();  // new express app
const jwt = require('jsonwebtoken')
require('dotenv').config()



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