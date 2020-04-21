'use strict'

import Point from './Point';
import Hexagon from './Hexagon';

export default class Hexagons {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _depth: number;
    private _biggestRadius: number;
    private _defaultCentre: Point;

    constructor(depth: number, angle: number = 0) {
        this._depth = depth;

        this.initCanvas(angle);
        this.drawFractal();
    }

    private initCanvas(angle) {
        this._canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        this._ctx = this._canvas.getContext('2d');

        this._canvas.width = 1800;
        this._canvas.height = 1800;
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._canvas.style.width = '600px';
        this._canvas.style.height = '600px';

        this._ctx.strokeStyle = 'white';
        this._ctx.lineWidth = 3;

        this._biggestRadius = Math.min(this._canvas.width / 2, this._canvas.height / 2) - 30;
        this._ctx.translate(this._canvas.width / 2, this._canvas.height / 2);
        this._ctx.rotate(this.radian(angle));
        this._defaultCentre = { x: 0, y: 0 };
    }

    drawFractal(center: Point = this._defaultCentre, radius: number = this._biggestRadius, counter: number = this._depth) {
        if (counter == 0) return;

        const hexagon: Hexagon = new Hexagon(center, radius, this._ctx);
        hexagon.draw();

        const newCenters: Point[] = hexagon.calculateHexagonPoints(2 * radius / 3);

        newCenters.forEach((center) => {
            this.drawFractal(center, radius / 3, counter -1);
        });
    }

    radian(angle: number): number {
        return Math.PI / 180 * angle;
    }
}
