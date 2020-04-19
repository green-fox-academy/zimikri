'use strict'

import Aircraft from './Aircraft';
import F16 from './F16';
import F35 from './F35';

export default class Carrier {
    private _name: string;
    private _aircrafts: Aircraft[];
    private _ammo: number;
    private _health: number;

    constructor(name: string, ammo: number, health: number) {
        this._name = name;
        this._aircrafts = [];
        this._ammo = ammo;
        this._health = health;
    }

    add(aircraft: Aircraft) {
        this._aircrafts.push(aircraft);
    }

    fill(inFight: boolean = false) {
        this.fillAircrafts(this._aircrafts.filter(aircraft => aircraft.isPriority()));
        this.fillAircrafts(this._aircrafts.filter(aircraft => !aircraft.isPriority()));

        // In case of fight we shoot first and then throw exeption
        if (this._ammo <= 0 && inFight == false) throw { type: `NoAmmo`, message: `\nThere is no more ammo on ${this._name}!` };        
    }

    fight(enemy: Carrier) {
        while (this._ammo > 0 && enemy.health > 0) {
            this.fill(true);
            this._aircrafts.forEach((aircraft) => {
                enemy.makeDamage(aircraft.fight());
                if (enemy.health <= 0) {
                    // throw new RangeError(`\n${enemy.name} is dead Jim :(`);
                    throw { type: `EnemyDestroyed`, message: `\n${enemy.name} is dead Jim :(\n` }
                    return;
                }
            });
        }
        if (this._ammo <= 0) throw { type: `NoAmmo`, message: `\nThere is no more ammo on ${this._name}!` };
    }

    getStatus() {
        console.log(`\nName: ${this._name}, Health: ${((this._health <= 0) ? 'Dead' : this._health)}, Aircraft count: ${this._aircrafts.length}, Ammo Storage: ${this._ammo}, Total damage: ${this.getTotalDamage()}`);
        this._aircrafts.forEach((aircraft) => {
            console.log(aircraft.getStatus());
        });
    }

    private getTotalDamage(): number {
        let totalDamage: number = 0;
        this._aircrafts.forEach((aircraft) => {totalDamage += aircraft.getAllDamage()});

        return totalDamage;
    }

    private fillAircrafts(aircrafts: Aircraft[]) {
        let counter: number = 0;

        while (this._ammo > 0 && counter < aircrafts.length) {
            this._ammo -= aircrafts[counter].refill(this._ammo);

            counter++;
        }
    }

    makeDamage(amount) {
        this._health -= amount;
    }

    get name(): string {
        return this._name;
    }

    get health(): number {
        return this._health;
    }

    get ammo(): number {
        return this._ammo;
    }
}
