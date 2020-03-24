const mongoose = require('mongoose')
const Schema = mongoose.Schema


const logSchema = new Schema({
    temp: Number,
    humidity: Number,
    img: String
})
const plantSchema = new Schema({
    name: String,
    scientific: String,
    logs: [logSchema]
})

module.exports = Plant = mongoose.model('Plant', plantSchema)