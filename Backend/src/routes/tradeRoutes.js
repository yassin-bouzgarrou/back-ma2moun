const express = require('express');
const { createTrade } = require('../controllers/tradeController');
const router = express.Router();

router.post('/', createTrade);

module.exports = router;
