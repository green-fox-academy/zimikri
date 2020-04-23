'use strict'

import Point from './Point';

export default class Tree {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _canvasScale: number;
    private _depth: number;
    private _baseColor: string;
    private _lineColor: string;
    private _treeLine: Point[];
    private _treeAngle: number;

    constructor(depth: number = 2, treeAngle: number = 20) {
        this._depth = depth;
        this._treeAngle = this.radian(treeAngle);
        this._treeLine = [];

        this.initCanvas();
        this.initTree();

        this.treeRecursion();
    }

    private initCanvas() {
        this._canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        this._ctx = this._canvas.getContext('2d');
        this._canvasScale = 3;

        const clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
        this._canvas.style.width = clientWidth + 'px';
        this._canvas.style.height = clientHeight + 'px';

        this._canvas.width = this._canvasScale * clientWidth;
        this._canvas.height = this._canvasScale * clientHeight;

        this._baseColor = '#00313E';
        this._lineColor = '#FED62F';
        this._ctx.strokeStyle = this._lineColor;
        this._ctx.lineWidth = this._canvasScale / 2;

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.fillStyle = this._baseColor;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.translate(this._canvas.width / 2, this._canvas.height - 200);
    }

    private initTree() {
        const lineBegin: Point = {
            x: 0,
            y: 0
        };
        const lineEnd: Point = {
            x: 0,
            y: -200
        };

        this._treeLine.push(lineBegin);
        this._treeLine.push(lineEnd);
    }

    private treeRecursion(lineBegin: Point = this._treeLine[0], lineEnd: Point = this._treeLine[1], counter: number = this._depth) {
        if (counter == 0) return;

        this.drawLine(lineBegin, lineEnd);

        const lineLength: number = Math.sqrt((lineEnd.x - lineBegin.x) ** 2 + (lineEnd.y - lineBegin.y) ** 2);
        const newLineLength: number = lineLength * (Math.cos(this._treeAngle));
        const deltaX = lineEnd.x - lineBegin.x;
        const deltaY = lineEnd.y - lineBegin.y;
        const lineAngle = Math.atan2(deltaY, deltaX);

        const trianglePoint1: Point = {
            x: lineEnd.x + newLineLength * Math.cos(lineAngle - this._treeAngle),
            y: lineEnd.y + newLineLength * Math.sin(lineAngle - this._treeAngle)
        };

        const trianglePoint2: Point = {
            x: lineEnd.x + lineLength * Math.cos(lineAngle),
            y: lineEnd.y + lineLength * Math.sin(lineAngle)
        };

        const trianglePoint3: Point = {
            x: lineEnd.x + newLineLength * Math.cos(lineAngle + this._treeAngle),
            y: lineEnd.y + newLineLength * Math.sin(lineAngle + this._treeAngle)
        };

        this.treeRecursion(lineEnd, trianglePoint1, counter - 1);
        this.treeRecursion(lineEnd, trianglePoint2, counter - 1);
        this.treeRecursion(lineEnd, trianglePoint3, counter - 1);
}

    private drawLine(lineBegin: Point, lineEnd: Point) {
        this._ctx.beginPath();
        this._ctx.moveTo(lineBegin.x, lineBegin.y);
        this._ctx.lineTo(lineEnd.x, lineEnd.y);
        this._ctx.stroke();
    }

    private radian(angle: number): number {
        return Math.PI / 180 * angle;
    }
}
