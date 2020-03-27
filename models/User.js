const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String, 
    lastname: String,
    email: String, 
    password: String
},{
    timestamps: true
})

module.exports = User = mongoose.model('user', userSchema)
