import * as express from 'express';
import { createUser } from '../controllers/authController';

const router = express.Router();

router.post('/signup', createUser);

module.exports = router;
