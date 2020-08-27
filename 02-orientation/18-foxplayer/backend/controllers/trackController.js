'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({'tracks': 'ok'});
});

module.exports = router;