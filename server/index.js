import express from 'express';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://admin:2la4Qp6lOS3qhcBa@cluster0.giqo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const URI = "mongodb+srv://admin:NYZlSkal4iYf3UDp@cluster0.cbx83.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const URI = "mongodb+srv://admin:tACuqUstqSPzqeij@cluster0.giqo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const URI = "mongodb+srv://admin:qPPZmCQ2JxzXiaf9@cluster0.kiplx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/posts', posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  })
  .catch((err) => {
    console.log('err', err);
  });

 
