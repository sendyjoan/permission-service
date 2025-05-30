import express from 'express';
import multer from 'multer';
import controller from '../controllers/client.controller.js';

const upload = multer();
const router = express.Router();

router.post('/', upload.none(), controller.create);

export default router;