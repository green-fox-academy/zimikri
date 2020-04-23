(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class KochLine {
    constructor(depth = 2, kochAngle = 60) {
        this._depth = depth;
        this._kochAngle = this.radian(kochAngle);
        this._kochLine = [];
        this.initCanvas();
        this.initKoch();
        this.kochRecursion();
    }
    initCanvas() {
        this._canvas = document.querySelector('.main-canvas');
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
    initKoch() {
        const lineBegin = {
            x: -this._canvas.width * 0.4,
            y: this._canvas.width / 4
        };
        const lineEnd = {
            x: this._canvas.width * 0.4,
            y: this._canvas.width / 4
        };
        this._kochLine.push(lineBegin);
        this._kochLine.push(lineEnd);
    }
    kochRecursion(lineBegin = this._kochLine[0], lineEnd = this._kochLine[1], counter = this._depth) {
        const lineLength = Math.sqrt((lineEnd.x - lineBegin.x) ** 2 + (lineEnd.y - lineBegin.y) ** 2);
        const newLineLength = lineLength / (2 * (1 + Math.cos(this._kochAngle)));
        const deltaX = lineEnd.x - lineBegin.x;
        const deltaY = lineEnd.y - lineBegin.y;
        const lineAngle = Math.atan2(deltaY, deltaX);
        const trianglePoint1 = {
            x: lineBegin.x + newLineLength * Math.cos(lineAngle),
            y: lineBegin.y + newLineLength * Math.sin(lineAngle)
        };
        const trianglePoint2 = {
            x: trianglePoint1.x + newLineLength * Math.cos(lineAngle - this._kochAngle),
            y: trianglePoint1.y + newLineLength * Math.sin(lineAngle - this._kochAngle)
        };
        const trianglePoint3 = {
            x: lineEnd.x - newLineLength * Math.cos(lineAngle),
            y: lineEnd.y - newLineLength * Math.sin(lineAngle)
        };
        if (counter > 0) {
            this.kochRecursion(lineBegin, trianglePoint1, counter - 1);
            this.kochRecursion(trianglePoint1, trianglePoint2, counter - 1);
            this.kochRecursion(trianglePoint2, trianglePoint3, counter - 1);
            this.kochRecursion(trianglePoint3, lineEnd, counter - 1);
        }
        else {
            this.drawShapeFromPoints([
                lineBegin,
                trianglePoint1,
                trianglePoint2,
                trianglePoint3,
                lineEnd
            ]);
        }
    }
    drawShapeFromPoints(points) {
        this._ctx.beginPath();
        this._ctx.moveTo(points[0].x, points[0].y);
        for (let index = 0; index < points.length; index++) {
            this._ctx.lineTo(points[index].x, points[index].y);
        }
        this._ctx.stroke();
    }
    radian(angle) {
        return Math.PI / 180 * angle;
    }
}
exports.default = KochLine;

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const KochLine_1 = require("./KochLine");
const counter = 2;
const kochAngle = 60;
window.onload = (event) => {
    new KochLine_1.default(counter, kochAngle);
};

},{"./KochLine":1}]},{},[2]);
