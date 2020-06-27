"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/sith", function (req, res) {
    const text = req.body.text;
    const response = {};

    if (!text) {
        response.error =
            "Feed me some text you have to, padawan young you are. Hmmm.";
    } else {
        let sentences = text.split(/\.\s*/);
        sentences = confuseWords(sentences);
        sentences = insertBlaBla(sentences);
        response.sith_text = sentences.join(". ").trim() + ".";
    }

    res.send(response);
});

function confuseWords(sentences) {
    const confusedSentences = [];

    sentences.forEach((sentence) => {
        const words = sentence.split(" ");

        for (let i = 0; i < words.length - 2; i += 2) {
            [words[i], words[i + 1]] = [
                words[i + 1].toLowerCase(),
                words[i].toLowerCase(),
            ];
        }

        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        confusedSentences.push(words.join(" "));
    });

    return confusedSentences;
}

function insertBlaBla(sentences) {
    let withBlaBla = [];
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i])
            withBlaBla = [...withBlaBla, sentences[i], ...getRandomBlaBla()];
    }

    return withBlaBla;
}

function getRandomBlaBla() {
    const blaBlaSentences = ["Arrgh", "Err..err.err", "Uhmm"];
    const sentenceCount = Math.floor(Math.random() * 2) + 1;

    for (let i = 0; i < sentenceCount; i++) {
        const randomIndex = Math.floor(Math.random() * blaBlaSentences.length);
        blaBlaSentences.splice(randomIndex, 1);
    }

    return blaBlaSentences;
}

app.listen(3000, "localhost");
