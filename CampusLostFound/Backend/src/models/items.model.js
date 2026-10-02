// const mongoose=require("mongoose");

// const itemSchema=new mongoose.Schema({
//     image:String,
//     itemName:String,
//     description:String,
//     type:{
//         type:String,
//         enum:['lost','found']
//     },
//     category:String,
//     location:String,
//     date:Date,
//     status:{
//         type:String,
//         enum:['active','resolved'],
//         default:'active'
//     }
// });

// const itemModel=mongoose.model("items",itemSchema);
// module.exports=itemModel;



//required field ensures that no missing valued post come
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    image: {
        type: String,
        required: true
    },

    itemName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ['lost', 'found'],
        required: true
    },

    category: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ['active', 'resolved'],
        default: 'active'
    }

});

const itemModel = mongoose.model("items", itemSchema);

module.exports = itemModel;