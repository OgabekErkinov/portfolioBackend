const { Schema, model} = require('mongoose')

const projectSchema = new Schema({
    projectName : { type : String, required : true },
    projectType : { type : String, required : true },
    projectCode : { type : String, required : true } ,
    projectHost : { type : String, required : true },
    projectDescription : { type : String, required : true, minLength : 25 },
    projectImage : { type : String, required : true }
}, { timestamps: true })

module.exports = model('Project', projectSchema)