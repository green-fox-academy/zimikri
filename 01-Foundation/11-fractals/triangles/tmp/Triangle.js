'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Triangle {
    constructor(depth, position = 'top') {
        this._depth = depth;
        this._baseColor = 'black';
        this._triangleColor = 'white';
        this.initCanvas();
        this.initBigTriangle(position);
        this.sierpinski(this._firstTriangleCoords);
    }
    initCanvas() {
        this._canvas = document.querySelector('.main-canvas');
        this._ctx = this._canvas.getContext('2d');
        this._canvas.width = 1800;
        this._canvas.height = 1800;
        this._canvas.style.width = '600px';
        this._canvas.style.height = '600px';
        this._ctx.strokeStyle = '#666666';
        this._ctx.fillStyle = '#cccccc';
        this._ctx.lineWidth = 3;
    }
    initBigTriangle(position) {
        const rotate = new Map([
            ['top', Math.PI],
            ['left', Math.PI / 2],
            ['bottom', 0],
            ['right', -Math.PI / 2],
        ]);
        const deltaY = (1 - Math.sqrt(3) / 2) * (this._canvas.width - 60) / 2;
        this._firstTriangleCoords = [
            [this._canvas.width / 2, deltaY],
            [(this._canvas.width - 30), this._canvas.height - deltaY],
            [30, this._canvas.height - deltaY]
        ];
        if (position != 'bottom' && rotate.get(position) != undefined) {
            this._ctx.translate(this._canvas.width / 2, this._canvas.height / 2);
            this._ctx.rotate(rotate.get(position));
            this._ctx.translate(-this._canvas.width / 2, -this._canvas.height / 2);
        }
    }
    sierpinski(coords, counter = this._depth) {
        if (counter == 0)
            return;
        const innerTriangleCoords = this.getInnerTriangleCoords(coords);
        if (counter == this._depth) {
            this.drawTriangle(coords, this._baseColor);
            this.drawTriangle(innerTriangleCoords[0]);
        }
        else {
            this.drawTriangle(innerTriangleCoords[0]);
        }
        this.sierpinski(innerTriangleCoords[1], counter - 1);
        this.sierpinski(innerTriangleCoords[2], counter - 1);
        this.sierpinski(innerTriangleCoords[3], counter - 1);
    }
    drawTriangle(coordinates, color = this._triangleColor) {
        this._ctx.beginPath();
        this._ctx.moveTo(coordinates[0][0], coordinates[0][1]);
        for (let index = 0; index < coordinates.length; index++) {
            this._ctx.lineTo(coordinates[index][0], coordinates[index][1]);
        }
        this._ctx.closePath();
        this._ctx.fillStyle = color;
        this._ctx.fill();
    }
    getInnerTriangleCoords(coordinates) {
        const localCoordinates = [...coordinates, coordinates[0]];
        const midCoords = [];
        const innerTriangleCoords = [];
        for (let i = 0; i < localCoordinates.length - 1; i++) {
            midCoords.push(this.getMidPoint(localCoordinates[i], localCoordinates[i + 1]));
        }
        innerTriangleCoords.push(midCoords);
        innerTriangleCoords.push([coordinates[0], midCoords[0], midCoords[2]]);
        innerTriangleCoords.push([midCoords[0], coordinates[1], midCoords[1]]);
        innerTriangleCoords.push([midCoords[2], midCoords[1], coordinates[2]]);
        return innerTriangleCoords;
    }
    getMidPoint(fromPoint, toPoint) {
        return [fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
    }
}
exports.default = Triangle;
//# sourceMappingURL=Triangle.js.map