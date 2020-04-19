(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        const innerTrianglesCoords = this.getInnerTrianglesCoords(coords);
        if (counter == this._depth) {
            this.drawTriangle(coords, this._baseColor);
            this.drawTriangle(innerTrianglesCoords[0]);
        }
        else {
            this.drawTriangle(innerTrianglesCoords[0]);
        }
        this.sierpinski(innerTrianglesCoords[1], counter - 1);
        this.sierpinski(innerTrianglesCoords[2], counter - 1);
        this.sierpinski(innerTrianglesCoords[3], counter - 1);
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
    getInnerTrianglesCoords(coordinates) {
        const localCoordinates = [...coordinates, coordinates[0]];
        const midCoords = [];
        const innerTrianglesCoords = [];
        for (let i = 0; i < localCoordinates.length - 1; i++) {
            midCoords.push(this.getMidPoint(localCoordinates[i], localCoordinates[i + 1]));
        }
        innerTrianglesCoords.push(midCoords);
        innerTrianglesCoords.push([coordinates[0], midCoords[0], midCoords[2]]);
        innerTrianglesCoords.push([midCoords[0], coordinates[1], midCoords[1]]);
        innerTrianglesCoords.push([midCoords[2], midCoords[1], coordinates[2]]);
        return innerTrianglesCoords;
    }
    getMidPoint(fromPoint, toPoint) {
        return [fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
    }
}
exports.default = Triangle;

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Triangle_1 = require("./Triangle");
window.onload = (event) => {
    const triangle = new Triangle_1.default(8, 'top');
};

},{"./Triangle":1}]},{},[2]);
