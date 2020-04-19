'use strict'

import Plant from './Plant';

export default class Flower extends Plant {
    constructor(color: string, waterNeeds: number = 5, waterAbsorb: number = 0.75) {
        super(color, waterNeeds, 'Flower', waterAbsorb);
    }
}
