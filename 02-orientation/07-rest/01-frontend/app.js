"use strict";

const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("assets"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Doubling
app.get("/doubling", function (req, res) {
    const input = req.query.input;
    let response;

    if (input === undefined) {
        response = { error: "Please provide an input!" };
    } else {
        response = {
            received: parseInt(input),
            result: input * 2,
        };
    }

    res.send(response);
});

// Greeter
app.get("/greeter", function (req, res) {
    const name = req.query.name;
    const title = req.query.title;
    let response;

    if (name !== undefined && title !== undefined) {
        response = {
            welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
        };
    } else {
        const error = [];
        if (name === undefined) error.push("a name");
        if (title === undefined) error.push("a title");
        response = {
            error: `Please provide ${error.join(" and ")}!`,
        };
        res.statusCode = 400;
    }

    res.send(response);
});

// Append - a
app.get("/appenda/:appendable", function (req, res) {
    const appendable = req.params.appendable;

    if (appendable === undefined) {
        res.sendStatus(404);
    }

    const response = {
        appended: `${appendable}a`,
    };
    res.send(response);
});

// Do until
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/dountil/:action", function (req, res) {
    const action = req.params.action;
    const until = req.body.until;
    let response = {};

    if (until === undefined) {
        response = {
            error: "Please provide a number!",
        };
    } else {
        const actions = {
            sum: (sum, actual) => {
                return sum + actual;
            },
            factor: (factor, actual) => {
                return factor * actual;
            },
        };

        if (actions[action] === undefined) {
            response = {
                error: "This action is not defined!",
            };
            res.statusCode = 400;
        } else {
            let result = 1;
            for (let i = 2; i <= until; i++) {
                result = actions[action](result, i);
            }

            console.log(actions[action], result);

            response = {
                result: result,
            };
        }
    }

    res.send(response);
});

app.listen(3000, "localhost");
