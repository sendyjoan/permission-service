import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import clientRoute from "./src/routes/client.route.js";

const app = express();
app.use(express.json());
app.use('/api/clients', clientRoute);

export default app;