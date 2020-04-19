'use strict'

export default class Triangle {
    private _canvas: HTMLCanvasElement;
    private _ctx:CanvasRenderingContext2D;
    private _depth: number;
    private _firstTriangleCoords: number[][];
    private _baseColor: string;
    private _triangleColor: string;

    constructor(depth: number, position:string = 'top') {
        this._depth = depth;
        this._baseColor = 'black';
        this._triangleColor = 'white';
        this.initCanvas();
        this.initBigTriangle(position);

        this.sierpinski(this._firstTriangleCoords)
    }

    private initCanvas() {
        this._canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        this._ctx = this._canvas.getContext('2d');

        this._canvas.width = 1800;
        this._canvas.height = 1800;
        this._canvas.style.width = '600px';
        this._canvas.style.height = '600px';
        this._ctx.strokeStyle = '#666666';
        this._ctx.fillStyle = '#cccccc';
        this._ctx.lineWidth = 3;
    }

    private initBigTriangle(position: string) {
        const rotate = new Map<string, number>([
            ['top', Math.PI],
            ['left', Math.PI / 2],
            ['bottom', 0],
            ['right', -Math.PI / 2],
        ]);
        const deltaY: number = (1 - Math.sqrt(3) / 2) * (this._canvas.width - 60) / 2; 

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

    private sierpinski(coords:number[][], counter: number = this._depth) {
        if (counter == 0) return;

        const innerTrianglesCoords:number[][][] = this.getInnerTrianglesCoords(coords);

        if (counter == this._depth) {
            this.drawShapeFromCoords(coords, this._baseColor);
            this.drawShapeFromCoords(innerTrianglesCoords[0]);
        } else {
            this.drawShapeFromCoords(innerTrianglesCoords[0]);
        }
        
        this.sierpinski(innerTrianglesCoords[1], counter - 1);
        this.sierpinski(innerTrianglesCoords[2], counter - 1);
        this.sierpinski(innerTrianglesCoords[3], counter - 1);
    }

    private drawShapeFromCoords(coordinates: number[][], color: string = this._triangleColor) {
        this._ctx.beginPath();
        this._ctx.moveTo(coordinates[0][0], coordinates[0][1]);
    
        for (let index = 0; index < coordinates.length; index++) {
            this._ctx.lineTo(coordinates[index][0], coordinates[index][1])
        }
    
        this._ctx.closePath();
        this._ctx.fillStyle = color;
        this._ctx.fill();
    }
    
    private getInnerTrianglesCoords(coordinates: number[][]): number[][][] {
        const localCoordinates: number[][] = [...coordinates, coordinates[0]];
        const midCoords: number [][] = [];
        const innerTrianglesCoords: number [][][] = [];

        for (let i = 0; i < localCoordinates.length - 1; i++) {
            midCoords.push(this.getMidPoint(localCoordinates[i], localCoordinates[i + 1]));
        }
        innerTrianglesCoords.push(midCoords);
        innerTrianglesCoords.push([coordinates[0], midCoords[0], midCoords[2]]);
        innerTrianglesCoords.push([midCoords[0], coordinates[1], midCoords[1]]);
        innerTrianglesCoords.push([midCoords[2], midCoords[1], coordinates[2]]);

        return innerTrianglesCoords;
    }

    private getMidPoint(fromPoint: number[], toPoint: number[]): number[] {
        return [fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
    }
}
