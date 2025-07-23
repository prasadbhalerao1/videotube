// Database connection and models
//1. Database connection may not go thorugh so use try catch block
//2.Database is always in annother continent lol so need to use async await

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        console.log(`MongoDB connected successfully: ${connectionInstance.connection.host}`);
        return connectionInstance;
    } catch (error) {
        console.log('Error connecting to the database:', error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB; // This will export the connectDB function to be used in other files
// You can call this function in your main server file to establish the connection