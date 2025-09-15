const dotenv = require("dotenv");
dotenv.config(); 
const mongoose = require("mongoose");
// Use environment variable for MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;

//console.log("MONGODB_URI:", MONGODB_URI);


const connectDb=()=> {
    return mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    });
}

module.exports = connectDb;
