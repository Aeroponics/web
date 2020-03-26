const mongoose = require('mongoose')
const Schema = mongoose.Schema


const logSchema = new Schema({
    temp: Number,
    humidity: Number,
    img: String
},{
    timestamps: true
})

const plantSchema = new Schema({
    name: String,
    scientific: String,
    logs: [logSchema]
},{
    timestamps: true
})

module.exports = Plant = mongoose.model('plant', plantSchema)