(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class SierpinskyCarpet {
    constructor(depth) {
        this._sharpenFactor = 3;
        this._depth = depth;
        this._baseColor = 'white';
        this._rectangleColor = 'black';
        this.initCanvas();
        this.drawGrid();
    }
    initCanvas() {
        this._canvas = document.querySelector('.main-canvas');
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
    drawGrid(center = this._defaultCentre, size = this._biggestSize / 2, counter = this._depth) {
        this.drawRectangle(center, size, 3 * 2 ** counter);
        if (counter == 0)
            return;
        const newCenters = this.getNewCenters(center, size);
        newCenters.forEach((newCenter) => {
            this.drawGrid({ ...newCenter }, size / 2, counter - 1);
        });
    }
    getNewCenters(center, size) {
        const newCenters = [];
        for (let xPos = -1; xPos <= 1; xPos++) {
            for (let yPos = -1; yPos <= 1; yPos++) {
                if (xPos == 0 || yPos == 0)
                    continue;
                const point = { ...center };
                point.x += xPos * size / 2;
                point.y += yPos * size / 2;
                newCenters.push(point);
            }
        }
        return newCenters;
    }
    drawRectangle(center, size, lineWidth) {
        const topLeftPoint = { ...center };
        topLeftPoint.x -= size / 2;
        topLeftPoint.y -= size / 2;
        this._ctx.lineWidth = lineWidth * this._sharpenFactor;
        this._ctx.strokeRect(topLeftPoint.x, topLeftPoint.y, size, size);
    }
}
exports.default = SierpinskyCarpet;

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const SquareGrid_1 = require("./SquareGrid");
window.onload = (event) => {
    const squareGrid = new SquareGrid_1.default(3);
};

},{"./SquareGrid":1}]},{},[2]);
