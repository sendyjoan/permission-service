import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import clientRoute from "./src/routes/client.route.js";
import authenticateToken from "./src/middlewares/auth.js";

const app = express();
app.use(express.json());
app.use('/api/clients', authenticateToken, clientRoute);

export default app;