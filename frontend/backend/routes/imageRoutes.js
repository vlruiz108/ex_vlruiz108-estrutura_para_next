import * as express from 'express';
import { uploadImage } from '../controllers/imageController';

const router = express.Router();

router.post('/upload', uploadImage);

module.exports = router;

