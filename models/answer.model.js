const { Schema, model } = require('mongoose')

const answerSchema = new Schema({
    userId : { type : String, required : true },
    questionId : { type : String, required : true },
    selectedAnswer : { type : String, required : true },
    roomId : { type : String, required : true }
 }, { timestamps : true })

 module.exports = model("Answer", answerSchema)