(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(depth, defaultAngle = 30) {
        this._depth = depth;
        this._defaultAngle = defaultAngle;
        this.initCanvas();
        this._biggestRadius = Math.min(this._canvas.width / 2, this._canvas.height / 2) - 30;
        this.drawFractal(0, 0, this._biggestRadius);
    }
    initCanvas() {
        this._canvas = document.querySelector('.main-canvas');
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
    drawFractal(centerX, centerY, radius, counter = this._depth) {
        if (counter == 0)
            return;
        this.drawCircle(centerX, centerY, radius);
        let newCenterX;
        let newCenterY;
        radius = radius / 2;
        for (let degree = 0; degree < 360; degree += 120) {
            newCenterX = centerX + Math.cos(this.getRadian(degree)) * radius;
            newCenterY = centerY + Math.sin(this.getRadian(degree)) * radius;
            this.drawFractal(newCenterX, newCenterY, radius, counter - 1);
        }
    }
    drawCircle(centerX, centerY, radius, color = 'balck') {
        this._ctx.strokeStyle = 'white';
        this._ctx.beginPath();
        this._ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this._ctx.stroke();
    }
    getRadian(angle) {
        return Math.PI / 180 * angle;
    }
}
exports.default = Circle;

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
window.onload = (event) => {
    const circles = new Circle_1.default(6);
};

},{"./Circle":1}]},{},[2]);
