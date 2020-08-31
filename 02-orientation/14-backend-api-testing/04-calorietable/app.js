'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(cors());

route(app);

module.exports = app;