"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/translate", function (req, res) {
    const text = req.body.text;
    const lang = req.body.lang;
    const response = {};

    if (!text || !lang || (lang != "hu" && lang != "en")) {
        response.error = "I can't translate that!";
        return res.send(response);
    } else {
        const translator = {
            hu: (text) => {
                response.translated = text.replace(
                    /([íaéáűúőóüöoiue])/gi,
                    (p1) => {
                        return `${p1}v${p1.toLowerCase()}`;
                    }
                );
                response.lang = "teve";

                res.send(response);
            },
            en: (text) => {
                const request = require("request");
                request.post(
                    "https://api.funtranslations.com/translate/pig-latin.json",
                    { json: { text: text } },
                    (error, resp, body) => {
                        if (error || body.error) {
                            response.error = error || body.error.message;
                            return res.send(response);
                        }

                        response.translated = body.contents.translated.trim();
                        response.lang = "gibberish";

                        res.send(response);
                    }
                );
            },
        };

        const translatorFunc = translator[lang];
        translatorFunc(text);
    }
});

app.listen(3000, "localhost");
