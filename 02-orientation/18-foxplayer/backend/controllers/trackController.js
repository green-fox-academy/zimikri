'use strict';

const express = require('express');
const router = express.Router();
const responseMessage = require('../models/dtos/ResponseMessage');

router.get('/', (req, res) => {
    res.send(responseMessage.error('Endpoint not available'));
});

module.exports = router;