const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userName : {type : String, required : true},
    phone : {type : String, required : true}
})

module.exports = model('User', userSchema) 