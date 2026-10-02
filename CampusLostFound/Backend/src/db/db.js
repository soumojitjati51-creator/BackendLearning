const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to DB");
    } catch (error) {
        console.error("Database connection failed",error.message);
        
    }

}

module.exports = connectDB