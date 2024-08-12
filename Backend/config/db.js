// const mongoose = require('mongoose');

// require('dotenv').config(); // Ensure this is at the top
// console.log('MONGO_URI:', process.env.MONGO_URI);

// mongoose.set('strictQuery', true);

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require('dotenv').config();  // Ensure this is loaded

// const URI = process.env.MONGO_URI;
const URI = 'mongodb+srv://anjali123:IR6Fc2a3DVqB5BNb@cluster0.mt6zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const URI = 'mongodb+srv://anishu2001:NFpKIJvaDV7qpBl6@cluster0.4dlpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


console.log("Mongo URI:", URI);  // Add this line for debugging

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("DB Connection Success");
    } catch (error) {
        console.error("DB connection failed");
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
