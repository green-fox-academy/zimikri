'use strict'

export default class PostIt {
    text: string;
    backgroundColor: string;
    textColor: string;

    constructor(text: string, backgroundColor: string = 'white', textColor: string = 'black') {
        this.text = text;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    toString(): string {
        return `${this.text} | ${this.backgroundColor} | ${this.textColor}`;
    }

}