import express from "express";
import bodyParser from "body-parser";
import connection from "./app/models/mongodb.js";
import router from "./app/routes/routes.js";
import mongoose from "mongoose";


const PORT = 4000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MongoDB test',
      description: 'MongoDB test server',
      version: '1.0.0'
    }
  },
  apis: ['./app/routes/*.js']
}

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Mongo' })
  console.log('Wecome to MongoDB test')
});

app.listen(PORT, () => {
  console.log('Server is running on PORT : ' + PORT)
});