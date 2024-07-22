import mongoose from "mongoose";
import "dotenv/config";

const dbString = process.env.DB_URI

mongoose.connect(dbString);

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.log(error);
})

connection.once('connected', () => {
    console.log('MongoDB Connected');
})

export default connection;