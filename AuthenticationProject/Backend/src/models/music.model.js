const mongoose= require('mongoose');
const musicSchema= new mongoose.Schema({
    uri:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,// Stores the _id of the user who created/uploaded the music.
        ref:"user", // Specifies the Mongoose model from which the referenced user can be retrieved using populate().
        required:true,
    }

})

const musicModel= mongoose.model("music",musicSchema);
module.exports=musicModel;