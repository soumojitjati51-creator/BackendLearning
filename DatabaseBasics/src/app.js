//server ko create krna
const express=require('express')
const noteModel= require('./models/note.model')


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

// const notes=[]

app.post("/notes",async (req,res)=>{
    const data= req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note Created succesfully"
    })
    
})

app.get("/notes",async (req,res)=>{
    const notes= await noteModel.find() //returns all notes
    // const notes=await noteModel.findOne({
    //     title:"test_title_2"
    // })
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})



app.delete("/notes/:id",async (req,res)=>{ //: is used before dynammic part of api called params
    const id= req.params.id
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"notes deleted successfully"
    })
})

app.patch("/notes/:id",async (req,res)=>{
    const id=req.params.id
    const description=req.body.description

    await noteModel.findOneAndUpdate({
        _id:id
    },{
        description:description
    })

    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports=app

/*
find=>[{},{}] or []
findOne=>{} or null
*/
