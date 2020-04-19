'use strict'

export default class Circle {
    private _canvas: HTMLCanvasElement;
    private _ctx:CanvasRenderingContext2D;
    private _depth: number;
    private _biggestRadius: number;
    private _defaultAngle: number;

    constructor(depth: number, defaultAngle: number = 30) {
        this._depth = depth;
        this._defaultAngle = defaultAngle;
        this.initCanvas();
        this._biggestRadius = Math.min(this._canvas.width / 2, this._canvas.height / 2) - 30;

        this.drawFractal(0, 0, this._biggestRadius);
    }

    private initCanvas() {
        this._canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        this._ctx = this._canvas.getContext('2d');

        this._canvas.width = 1800;
        this._canvas.height = 1800;
        this._canvas.style.width = '600px';
        this._canvas.style.height = '600px';
        this._ctx.strokeStyle = 'white';
        this._ctx.fillStyle = 'red';
        this._ctx.lineWidth = 3;
        this._ctx.translate(this._canvas.width / 2, this._canvas.height / 2);
        this._ctx.rotate(this.getRadian(this._defaultAngle));
    }

    private drawFractal(centerX: number, centerY: number, radius:number, counter: number = this._depth) {
        if (counter == 0) return;

        this.drawCircle(centerX, centerY, radius);

        let newCenterX: number;
        let newCenterY: number;
        radius = radius / 2;

        for (let degree = 0; degree < 360; degree += 120) {
            newCenterX = centerX + Math.cos(this.getRadian(degree)) * radius;
            newCenterY = centerY + Math.sin(this.getRadian(degree)) * radius;
            this.drawFractal(newCenterX, newCenterY, radius, counter - 1);
        }
    }

    private drawCircle(centerX: number, centerY: number, radius: number, color: string = 'balck') {
        this._ctx.strokeStyle = 'white';
        this._ctx.beginPath();
        this._ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this._ctx.stroke();
    }

    private getRadian(angle: number): number {
        return Math.PI / 180 * angle;
    }
}
