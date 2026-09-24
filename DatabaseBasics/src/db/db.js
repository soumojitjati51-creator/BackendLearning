const mongoose= require('mongoose')

async function connectDB() {
    await mongoose.connect("mongodb+srv://backendLearningUser:xR3Bjew4kqqHQ2hO@backendlearningcluster.nbjospl.mongodb.net/halley")
    console.log("Connected to DB");
    
}
module.exports= connectDB
//Here, using the Mongoose package, we are connecting our server with database. Here we are using async function because connecting to the database is taking time. So we are using async-await function. And there we are using the method connecting from Mongoose and using the URL of the database. Now it is noticeable that the halley, after the slash, the word halley is the name of our database, and before it the URL is the URL of cluster. Now the Mongoose.connect method is so powerful that it firstly it finds the halley database and connects to it. But even if it doesn't find halley database, it creates the database halley and connects with it.