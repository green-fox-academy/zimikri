(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Hexagon {
    constructor(center, outerRadius, ctx) {
        this._center = center;
        this._outerRadius = outerRadius;
        this._hexagonPoints = [];
        this._ctx = ctx;
    }
    draw() {
        this._hexagonPoints = this.calculateHexagonPoints();
        this.drawShapeFromPoints();
    }
    calculateHexagonPoints(radius = this._outerRadius) {
        const hexagonPoints = [];
        for (let i = 0; i < 6; i++) {
            const point = { ...this._center };
            point.x += Math.floor(Math.sin(this.radian(i * 60 + 30)) * radius);
            point.y -= Math.floor(Math.cos(this.radian(i * 60 + 30)) * radius);
            hexagonPoints.push(point);
        }
        return hexagonPoints;
    }
    drawShapeFromPoints(points = this._hexagonPoints) {
        this._ctx.beginPath();
        this._ctx.moveTo(points[0].x, points[0].y);
        for (let index = 0; index < points.length; index++) {
            this._ctx.lineTo(points[index].x, points[index].y);
        }
        this._ctx.closePath();
        this._ctx.stroke();
    }
    radian(angle) {
        return Math.PI / 180 * angle;
    }
}
exports.default = Hexagon;

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Hexagon_1 = require("./Hexagon");
class Hexagons {
    constructor(depth, angle = 0) {
        this._depth = depth;
        this.initCanvas(angle);
        this.drawFractal();
    }
    initCanvas(angle) {
        this._canvas = document.querySelector('.main-canvas');
        this._ctx = this._canvas.getContext('2d');
        this._canvas.width = 1800;
        this._canvas.height = 1800;
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._canvas.style.width = '600px';
        this._canvas.style.height = '600px';
        this._ctx.strokeStyle = 'white';
        this._ctx.lineWidth = 3;
        this._biggestRadius = Math.min(this._canvas.width / 2, this._canvas.height / 2) - 30;
        this._ctx.translate(this._canvas.width / 2, this._canvas.height / 2);
        this._ctx.rotate(this.radian(angle));
        this._defaultCentre = { x: 0, y: 0 };
    }
    drawFractal(center = this._defaultCentre, radius = this._biggestRadius, counter = this._depth) {
        if (counter == 0)
            return;
        const hexagon = new Hexagon_1.default(center, radius, this._ctx);
        hexagon.draw();
        const newCenters = hexagon.calculateHexagonPoints(2 * radius / 3);
        newCenters.forEach((center) => {
            this.drawFractal(center, radius / 3, counter - 1);
        });
    }
    radian(angle) {
        return Math.PI / 180 * angle;
    }
}
exports.default = Hexagons;

},{"./Hexagon":1}],3:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Hexagons_1 = require("./Hexagons");
let hexagons;
let angle = 0;
window.onload = (event) => {
    new Hexagons_1.default(5, angle);
};

},{"./Hexagons":2}]},{},[3]);
