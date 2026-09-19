const express=require('express');

const app=express();//creating server instance

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("Hello World About")
})

app.get("/contact",(req,res)=>{
    res.send("Hello World Contact")
})
app.listen(3000,()=>{
    console.log("The server is running");// staring server
    
})