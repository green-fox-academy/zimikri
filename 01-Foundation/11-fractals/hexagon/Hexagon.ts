'use strict'

import Point from './Point';

export default class Hexagon {

    private _center: Point;
    private _outerRadius: number;
    private _hexagonPoints: Point[];
    private _ctx: CanvasRenderingContext2D;

    constructor(center: Point, outerRadius: number, ctx: CanvasRenderingContext2D) {
        this._center = center;
        this._outerRadius = outerRadius;
        this._hexagonPoints = [];
        this._ctx = ctx;
    }

    draw() {
        this._hexagonPoints = this.calculateHexagonPoints();
        this.drawShapeFromPoints();
    }

    calculateHexagonPoints(radius: number = this._outerRadius): Point[] {
        const hexagonPoints: Point[] = [];
        for (let i = 0; i < 6; i++) {
            const point: Point = {...this._center};
            point.x += Math.floor(Math.sin(this.radian(i * 60 + 30)) * radius);
            point.y -= Math.floor(Math.cos(this.radian(i * 60 + 30)) * radius);

            hexagonPoints.push(point);
        }

        return hexagonPoints;
    }

    private drawShapeFromPoints(points: Point[] = this._hexagonPoints) {
        this._ctx.beginPath();
        this._ctx.moveTo(points[0].x, points[0].y);
    
        for (let index = 0; index < points.length; index++) {
            this._ctx.lineTo(points[index].x, points[index].y);
        }
    
        this._ctx.closePath();
        this._ctx.stroke();
    }

    radian(angle: number): number {
        return Math.PI / 180 * angle;
    }
}
