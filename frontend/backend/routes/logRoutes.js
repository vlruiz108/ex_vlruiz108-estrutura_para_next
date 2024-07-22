const express = require('express');
const { createLog } = require('../controllers/logController');

const router = express.Router();

router.post('/create', createLog);

module.exports = router;
