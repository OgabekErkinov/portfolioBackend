const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title : {type : String, unique : true},
    cover : {type : String },
    page : { type : Number, required : true },
    author : { type : String, required : true },
    state : { type : String },
    published : { type : Number },
    isbn : { type : String, default : false },
}, { timestamps : true })

module.exports = model('Book', bookSchema) 