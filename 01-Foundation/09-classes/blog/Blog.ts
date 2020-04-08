'use strict'

import BlogPost from './BlogPost';

export default class Blog {
    private _posts: BlogPost[];

    constructor() {
        this._posts = [];
    }

    get posts(): BlogPost[] {
        return this._posts;
    }

    add(post: BlogPost) {
        this._posts.push(post);
    }

    delete(i: number) {
        if (this._posts[i] !== undefined) this._posts.splice(i, 1);
    }

    update(i: number, blogPost: BlogPost) {
        if (this._posts[i] !== undefined) this._posts.splice(i, 1, blogPost);
    }

    toString(): string {
        return `\n${this._posts.join('\n\n')}`;
    }
}