import express from "express";
import connectDB from "./config/database";
import cors from "cors";
import router from "./routes/product";
const app = express();

connectDB('mongodb://localhost:27017/new');

app.use(cors());
app.use(express.json());

app.use('/api', router);

export const viteNodeApp = app;