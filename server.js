import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/db.js";
import bodyParser from 'body-parser';
import postRoutes from "./routes/postsRoutes.js"


dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());


app.use('/api/posts', postRoutes);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Blog app</h1>");
});

const PORT = process.env.PORT || 7080;

const serverStart = async () => {
    try {
        connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () =>
            console.log("server is running on port 7080"))
    } catch (error) {
        console.log(error)
    }
};

serverStart();

export default app;