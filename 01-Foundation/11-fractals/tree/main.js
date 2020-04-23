(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Tree {
    constructor(depth = 2, treeAngle = 20) {
        this._depth = depth;
        this._treeAngle = this.radian(treeAngle);
        this._treeLine = [];
        this.initCanvas();
        this.initTree();
        this.treeRecursion();
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
        this._baseColor = '#00313E';
        this._lineColor = '#FED62F';
        this._ctx.strokeStyle = this._lineColor;
        this._ctx.lineWidth = this._canvasScale / 2;
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.fillStyle = this._baseColor;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.translate(this._canvas.width / 2, this._canvas.height - 200);
        this._maxRadius = Math.min(this._canvas.width / 2, this._canvas.height / 2) - 60;
        this._defaultCentre = { x: 0, y: 0 };
    }
    initTree() {
        const lineBegin = {
            x: 0,
            y: 0
        };
        const lineEnd = {
            x: 0,
            y: -200
        };
        this._treeLine.push(lineBegin);
        this._treeLine.push(lineEnd);
    }
    treeRecursion(lineBegin = this._treeLine[0], lineEnd = this._treeLine[1], counter = this._depth) {
        if (counter == 0)
            return;
        this._ctx.beginPath();
        this._ctx.moveTo(lineBegin.x, lineBegin.y);
        this._ctx.lineTo(lineEnd.x, lineEnd.y);
        this._ctx.stroke();
        const lineLength = Math.sqrt((lineEnd.x - lineBegin.x) ** 2 + (lineEnd.y - lineBegin.y) ** 2);
        // const newLineLength: number = lineLength * (1 - Math.sin(this._treeAngle));
        const newLineLength = lineLength * (Math.cos(this._treeAngle));
        console.log('newLineLength', newLineLength);
        const deltaX = lineEnd.x - lineBegin.x;
        const deltaY = lineEnd.y - lineBegin.y;
        const lineAngle = Math.atan2(deltaY, deltaX);
        const trianglePoint1 = {
            x: lineEnd.x + newLineLength * Math.cos(lineAngle - this._treeAngle),
            y: lineEnd.y + newLineLength * Math.sin(lineAngle - this._treeAngle)
        };
        const trianglePoint2 = {
            x: lineEnd.x + lineLength * Math.cos(lineAngle),
            y: lineEnd.y + lineLength * Math.sin(lineAngle)
        };
        const trianglePoint3 = {
            x: lineEnd.x + newLineLength * Math.cos(lineAngle + this._treeAngle),
            y: lineEnd.y + newLineLength * Math.sin(lineAngle + this._treeAngle)
        };
        this.treeRecursion(lineEnd, trianglePoint1, counter - 1);
        this.treeRecursion(lineEnd, trianglePoint2, counter - 1);
        this.treeRecursion(lineEnd, trianglePoint3, counter - 1);
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
exports.default = Tree;

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = require("./Tree");
const counter = 9;
const kochAngle = 30; //25.71;
window.onload = (event) => {
    new Tree_1.default(counter, kochAngle);
};

},{"./Tree":1}]},{},[2]);
