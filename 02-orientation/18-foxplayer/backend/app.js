'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.FOX_HOST || 'localhost';
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({'API status': 'ok'});
});

router.route(app);

app.listen(PORT, HOST, () => {
    console.log(`App listening on ${HOST}:${PORT}`);
});