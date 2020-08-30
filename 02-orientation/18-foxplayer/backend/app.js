'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const responseMessage = require('../models/dtos/ResponseMessage');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(responseMessage.ok('Foxplayer API works'));
});

router.route(app);

app.listen(PORT, () => {
    console.log(`App listening on ${HOST}:${PORT}`);
});