const mongoose= require("mongoose")

const postSchema= new mongoose.Schema({
    image:String,
    caption:String,
})

const postModel= mongoose.model("post",postSchema);

module.exports= postModel;
/*
post={
image:String,
caption:String
}
user={
name:String,
email:String,
password:String,
posts:[post1,post2,post3]
}


*/