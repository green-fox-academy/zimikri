'use strict';

import Printable from './Printable';

export default class Todo implements Printable {
    private _task: string;
    private _priority: string;
    private _done: boolean;

    constructor(task: string, priority: string, done: boolean = false) {
        this._task = task;
        this._priority = priority;
        this._done = done;
    }

    printAllFields() {
        console.log(
            `Task: ${this._task} | Priority: ${this._priority} | Done: ${this._done}`
        );
    }
}
