'use strict'

export default class Aircraft {
    private _type: string;
    private _maxAmmo: number;
    private _ammo: number;
    private _baseDamage: number;
    // private _allDamage: number;

    constructor(type: string, maxAmmo: number, baseDamage: number) {
        this._type = type;
        this._maxAmmo = maxAmmo;
        this._ammo = 0;
        this._baseDamage = baseDamage;
    }

    fight(): number {
        const damageDealt = this._ammo * this._baseDamage;
        this._ammo = 0;

        return damageDealt;
    }

    refill(amount: number): number {
        const ammoNeeds = this._maxAmmo - this._ammo;
        const ammoRefilled = (ammoNeeds < amount) ? ammoNeeds : amount;
        this._ammo += ammoRefilled;
        
        return ammoRefilled;
    }

    getType(): string {
        return this._type;
    }

    getStatus(): string {
        return `Type ${this._type}, Ammo: ${this._ammo}, Base Damage: ${this._baseDamage}, All Damage: ${this.getAllDamage()}`;
    }

    isPriority(): boolean {
        return this._type == 'F35';
    }

    getAllDamage(): number {
        return this._ammo * this._baseDamage;
    }

}