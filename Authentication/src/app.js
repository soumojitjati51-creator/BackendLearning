const express=require("express");
const cookieParser=require('cookie-parser');
const authRoutes=require("./routes/auth.routes");
const postRoutes=require("./routes/post.routes")
const app=express();

app.use(express.json());
app.use(cookieParser());//cookie-parser is used as middleware so that the server can access the data stored in cookie

app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);

module.exports=app;

//here /api/auth is prefix i.e. for accessing the api we need to write the prefix before api