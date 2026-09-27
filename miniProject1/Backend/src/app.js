//server ko create krna
const express= require("express");
const multer= require("multer")
const uploadFile= require("./services/storage.service")
const postModel= require("./models/post.model")
const cors= require('cors')


const app=express();

app.use(cors());
app.use(express.json()); //as the request data format is not raw so only this middleware is useless we need to use multer
const upload=multer({storage:multer.memoryStorage()})

// app.post('/create-post',upload.single("image"),async(req,res)=>{//inside upload.single put the key value that you gave in postman key
//     console.log(req.body);
//     console.log(req.file);
//     const result = await uploadFile(req.file.buffer)

//     const post= await postModel.create({
//         image:result.url,
//         caption: req.body.caption
//     })
//     return res.status(201).json({
//         message:"Post created successfully",
//         post
//     })
// })

app.post('/create-post', upload.single("image"), async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.file)

        const result = await uploadFile(
            req.file.buffer,
            req.file.originalname
        )

        console.log("IMAGE URL:", result.url)

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "Post created successfully",
            post
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Error creating post",
            error: error.message
        })
    }
})

app.get("/posts",async(req,res)=>{
    const posts=await postModel.find()
    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })

})

app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params

        const deletedPost = await postModel.findByIdAndDelete(id)

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        return res.status(200).json({
            message: "Post deleted successfully",
            post: deletedPost
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Error deleting post",
            error: error.message
        })
    }
})

module.exports=app;
