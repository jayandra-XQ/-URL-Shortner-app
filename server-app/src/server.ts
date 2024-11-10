import express from 'express';
import dotenv from "dotenv"
import cors from "cors"
import connectDb from './config/dbConfig';
dotenv.config();

connectDb();

const PORT = process.env.port || 5001;

const app = express();

app.get("/" , (req,res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

