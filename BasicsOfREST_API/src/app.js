//server ko create krna
const express=require('express')
const app=express();

app.use(express.json())
/*
note={
    title:'not1',
    description:"bla bla"
}

const notes=[
    {
    title:'not1',
    description:"bla bla"
    }
    {
    title:'not2',
    description:"bla bla"
    }
]
*/

const notes=[]

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message:"note created successfully"
    })
    
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{ //: is used before dynammic part of api called params
    const index= req.params.index
    delete notes[index]
    res.status(200).json({
        message:"notes deleted successfully"
    })
})

app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index
    const description=req.body.description

    notes[index].description=description

    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports=app