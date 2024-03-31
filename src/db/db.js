import mongoose from "mongoose";

import { config } from 'dotenv';
config();

// Conectar con la base de datos de mongoDB

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
        console.log('Conectado a MongoDB');
        return mongoose.connection;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default connectDB;
