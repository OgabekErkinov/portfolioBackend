const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email : {type : String, unique : true},
    phone : {type : String },
    username : { type : String, required : true },
    hashPassword : { type : String, required : true },
    firstName : { type : String },
    lastName : { type : String },
    isOnline : { type : Boolean, default : false },
    rating : { type : Number },
    currentRoomId : { type : String, default : null},
    picture : { type : String },
    myBooks : { type : [String]}
}, { timestamps : true })

module.exports = model('User', userSchema) 