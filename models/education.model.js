const { Schema, model } = require('mongoose')

const educationSchema = new Schema({
    organizationName : { type : String, required : true },
    organizationImage : { type : String, required : true },
    startDate : { type : Date, required : true },
    endDate : { type : Date, required : true }
}, { timestamps : true })

module.exports = model('Education', educationSchema )