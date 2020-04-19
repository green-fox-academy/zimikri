'use strict'

import Flower from './Flower';
import Tree from './Tree';
import Plant from './Plant';

export default class Garden {
    private _plants: Plant[];

    constructor() {
        this._plants = [];
    }

    addFlower(color:string, waterNeeds?: number, waterAbsorb?: number) {
        this._plants.push(new Flower(color, waterNeeds, waterAbsorb));
    }

    addTree(color:string, waterNeeds?: number, waterAbsorb?: number) {
        this._plants.push(new Tree(color, waterNeeds, waterAbsorb));
    }

    water(amount: number) {
        const plantsToWater: Plant[] = this._plants.filter(plant => plant.isNeedWater());
        const waterPerPlant: number = amount / plantsToWater.length;

        plantsToWater.forEach((plant) => {
            plant.water(waterPerPlant);
        });

        console.log(`\nWatering with ${amount}`);
        this.printInfo();
    }

    printInfo() {
        this._plants.forEach((plant) => console.log(plant.getInfo()));
    }
}
