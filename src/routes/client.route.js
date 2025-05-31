import express from 'express';
import multer from 'multer';
import controller from '../controllers/client.controller.js';

const upload = multer();
const router = express.Router();

router.post('/', upload.none(), controller.create);
router.get('/', controller.index);
router.get('/:appKey', controller.detail);

export default router;