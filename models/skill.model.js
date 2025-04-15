const { Schema, model } = require('mongoose')

const skillSchema = new Schema({
    skillName : { type : String, required : true },
    skillImage : { type : String, required : true }
}, { timestamps : true})

module.exports = model('Skill', skillSchema)