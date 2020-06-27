"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/arrays", function (req, res) {
    const what = req.body.what;
    const numbers = req.body.numbers;
    const response = {};

    const actions = {
        sum: (numbers) => {
            return numbers.reduce((n, actual) => {
                return n + actual;
            });
        },
        multiply: (numbers) => {
            return numbers.reduce((n, actual) => {
                return n * actual;
            });
        },
        double: (numbers) => {
            return numbers.map((n) => n * 2);
        },
    };

    if (
        what !== undefined &&
        numbers !== undefined &&
        typeof numbers == "object"
    ) {
        const action = actions[what];
        if (action === undefined) {
            response.error = "This action is not defined!";
            res.statusCode = 400;
        } else {
            response.result = action(numbers);
        }
    } else {
        const error = [];
        if (what === undefined)
            error.push("Please provide what to do with the numbers!");
        if (numbers === undefined) error.push("Please provide numbers!");
        if (typeof numbers != "object") error.push("Numbers should be array!");

        response.error = error.join("\n");
    }

    res.send(response);
});

app.listen(3000, "localhost");
