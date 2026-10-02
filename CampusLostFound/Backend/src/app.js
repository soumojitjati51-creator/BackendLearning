//server ko create krna

const express = require("express");
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const itemModel = require('./models/items.model');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() })

app.post('/items', upload.single('image'), async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);

        const result = await uploadFile(
            req.file.buffer  
        )

        console.log('Image URL:', result.url);

        const post = await itemModel.create({
            image: result.url,
            itemName: req.body.itemName,
            description: req.body.description,
            type: req.body.type,
            category: req.body.category,
            location: req.body.location,
            date: req.body.date,
            status: req.body.status
        })
        return res.status(201).json({
            message: "lost request posted successfully",
            post
        })




    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error creating post",
            error: error.message
        })
    }
})

app.get('/items', async (req, res) => {
    try {
        const items = await itemModel.find();
        return res.status(200).json({
            message: "List of items fetched successfully",
            items
        })
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Error fetching item",
            error: error.message
        });
    }
})
app.get('/items/:id', async (req, res) => {
    try {
        const item = await itemModel.findById(req.params.id);
        if (!item) {
            return res.status(404).json({
                message: "Item not Found"
            })
        }
        return res.status(200).json({
            message: "item fetched successfully",
            item
        })
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Error fetching item",
            error: error.message
        });
    }
})

app.put('/items/:id', async (req, res) => {
    try {
        const updateItem = await itemModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updateItem) {
            return res.status(404).json({
                message: "Item not found",

            })
        }
        return res.status(200).json({
            message: "Item updated successfully",
            item: updateItem
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error updating items",
            error: error.message
        })
    }
})

app.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await itemModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({
                message: "Not found"
            })
        }
        return res.status(200).json({
            message: "item deleted successfully",
            item: deletedItem
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error deleting items",
            error: error.message
        })
    }
})

module.exports = app;