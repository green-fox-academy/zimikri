'use strict';

const express = require('express');
const controller = require('./controllers/bookController');
const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('./static/assets'));

controller.bookController(app);

app.listen(3000, 'localhost', () => {
    console.log("The app is listening on port 3000...");
});