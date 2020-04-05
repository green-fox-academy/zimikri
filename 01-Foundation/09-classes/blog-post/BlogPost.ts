'use strict'

export default class BlogPost {
    title: string;
    text: string;
    authorName: string;
    publicationDate: string;

    constructor(title: string, text: string, authorName: string, publicationDate: string) {
        this.title = title;
        this.text = text;
        this.authorName = authorName;
        this.publicationDate = publicationDate;
    }

    toString(): string {
        const blogPostString: string = `* ${this.title} *\n${this.text}\nby ${this.authorName}, on ${this.publicationDate}\n`;
        return blogPostString;
    }

}