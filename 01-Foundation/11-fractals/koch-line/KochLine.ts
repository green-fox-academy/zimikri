'use strict'

import Point from './Point';

export default class KochLine {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _canvasScale: number;
    private _depth: number;
    private _defaultCentre: Point;
    private _baseColor: string;
    private _lineColor: string;
    private _maxRadius: number;
    private _kochLine: Point[];
    private _kochAngle: number;

    constructor(depth: number = 2, kochAngle: number = 60) {
        this._depth = depth;
        this._kochAngle = this.radian(kochAngle);
        this._kochLine = [];

        this.initCanvas();
        this.initKoch();

        this.kochRecursion();
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

        this._baseColor = '#333333';
        this._lineColor = 'white';
        this._ctx.strokeStyle = this._lineColor;
        this._ctx.lineWidth = this._canvasScale / 2;

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.fillStyle = this._baseColor;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.translate(this._canvas.width / 2, this._canvas.height / 2);

        this._maxRadius = Math.min(this._canvas.width / 2, this._canvas.height / 2) - 60;
        this._defaultCentre = { x: 0, y: 0 };
    }

    private initKoch() {
        const lineBegin: Point = {
            x: -this._canvas.width * 0.4,
            y: this._canvas.width / 4
        };
        const lineEnd: Point = {
            x: this._canvas.width * 0.4,
            y: this._canvas.width / 4
        };

        this._kochLine.push(lineBegin);
        this._kochLine.push(lineEnd);
    }

    private kochRecursion(lineBegin: Point = this._kochLine[0], lineEnd: Point = this._kochLine[1], counter: number = this._depth) {
        const lineLength: number = Math.sqrt((lineEnd.x - lineBegin.x) ** 2 + (lineEnd.y - lineBegin.y) ** 2);
        const newLineLength: number = lineLength / (2 * (1 +  Math.cos(this._kochAngle)));
        const deltaX = lineEnd.x - lineBegin.x;
        const deltaY = lineEnd.y - lineBegin.y;
        const lineAngle = Math.atan2(deltaY, deltaX);

        const trianglePoint1: Point = {
            x: lineBegin.x + newLineLength * Math.cos(lineAngle),
            y: lineBegin.y + newLineLength * Math.sin(lineAngle)
        };

        const trianglePoint2: Point = {
            x: trianglePoint1.x + newLineLength * Math.cos(lineAngle - this._kochAngle),
            y: trianglePoint1.y + newLineLength * Math.sin(lineAngle - this._kochAngle)
        };

        const trianglePoint3: Point = {
            x: lineEnd.x - newLineLength * Math.cos(lineAngle),
            y: lineEnd.y - newLineLength * Math.sin(lineAngle)
        };

        if (counter > 0) {
            this.kochRecursion(lineBegin, trianglePoint1, counter - 1);
            this.kochRecursion(trianglePoint1, trianglePoint2, counter - 1);
            this.kochRecursion(trianglePoint2, trianglePoint3, counter - 1);
            this.kochRecursion(trianglePoint3, lineEnd, counter - 1);
        } else {
            this.drawShapeFromPoints([
                lineBegin, 
                trianglePoint1, 
                trianglePoint2, 
                trianglePoint3, 
                lineEnd
            ]);
        }
    }

    private drawShapeFromPoints(points: Point[]) {
        this._ctx.beginPath();
        this._ctx.moveTo(points[0].x, points[0].y);
    
        for (let index = 0; index < points.length; index++) {
            this._ctx.lineTo(points[index].x, points[index].y);
        }
    
        this._ctx.stroke();
    }

    radian(angle: number): number {
        return Math.PI / 180 * angle;
    }
}
