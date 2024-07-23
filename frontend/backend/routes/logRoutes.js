import * as express from 'express';
import { createLog } from '../controllers/logController';

const router = express.Router();

router.post('/create', createLog);

module.exports = router;
