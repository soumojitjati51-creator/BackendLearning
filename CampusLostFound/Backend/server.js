//server ko start krna
require("dotenv").config();
const app=require("./src/app")
const connectDB=require("./src/db/db");

connectDB();

app.listen(3000,()=>{
    console.log("the server is running on port 3000");
    
})