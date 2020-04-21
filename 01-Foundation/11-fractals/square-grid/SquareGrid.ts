'use strict'

import Point from './Point';

export default class SierpinskyCarpet {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _sharpenFactor = 3;
    private _depth: number;
    private _defaultCentre: Point;
    private _baseColor: string;
    private _rectangleColor: string;
    private _biggestSize: number;

    constructor(depth: number) {
        this._depth = depth;
        this._baseColor = 'white';
        this._rectangleColor = 'black';
        this.initCanvas();

        this.drawGrid()
    }

    private initCanvas() {
        this._canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        this._ctx = this._canvas.getContext('2d');

        this._canvas.width = 1800;
        this._canvas.height = 1800;
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._canvas.style.width = this._canvas.width / this._sharpenFactor + 'px';
        this._canvas.style.height = this._canvas.height / this._sharpenFactor + 'px';

        this._biggestSize = Math.min(this._canvas.width, this._canvas.height) - 30;
        this._ctx.translate(this._canvas.width / 2, this._canvas.height / 2);
        this._defaultCentre = { x: 0, y: 0 };

        this._ctx.fillStyle = this._baseColor;
        this._ctx.fillRect(-this._biggestSize / 2, -this._biggestSize / 2, this._biggestSize, this._biggestSize);
        this._ctx.strokeStyle = this._rectangleColor;
    }

    private drawGrid(center: Point = this._defaultCentre, size: number = this._biggestSize / 2, counter: number = this._depth) {

        this.drawRectangle(center, size, 3 * 2 ** counter);
        
        if (counter == 0) return;
        
        const newCenters: Point[] = this.getNewCenters(center, size);
        newCenters.forEach((newCenter) => {
            this.drawGrid({...newCenter}, size / 2, counter - 1);
        });

    }

    private getNewCenters(center: Point, size: number): Point[] {
        const newCenters: Point[] = [];

        for (let xPos = -1; xPos <= 1; xPos++) {
            for (let yPos = -1; yPos <= 1; yPos++) {
                if (xPos == 0 || yPos == 0) continue;

                const point: Point = {...center};
                point.x += xPos * size / 2;
                point.y += yPos * size / 2;

                newCenters.push(point);
            }
        }

        return newCenters;
    }

    private drawRectangle(center: Point, size: number, lineWidth: number) {
        const topLeftPoint: Point = {...center}
        topLeftPoint.x -= size / 2;
        topLeftPoint.y -= size / 2;
        
        this._ctx.lineWidth = lineWidth * this._sharpenFactor;
        this._ctx.strokeRect(topLeftPoint.x, topLeftPoint.y, size, size);
    }
}
