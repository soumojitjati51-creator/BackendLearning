const mongoose= require('mongoose')

const noteSchema= new mongoose.Schema({
    title:String,
    description: String,
})

const noteModel= mongoose.model("note",noteSchema)

module.exports=noteModel

/*
for performing CRUD operations in DB we need to create noteModel
*/