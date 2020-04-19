'use strict'

import Plant from './Plant';

export default class Tree extends Plant {
    constructor(color: string, waterNeeds: number = 10, waterAbsorb: number = 0.4) {
        super(color, waterNeeds, 'Tree', waterAbsorb);
    }
}
