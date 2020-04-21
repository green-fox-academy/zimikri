'use strict';

import Reservationy from './Reservationy';

export default class Reservation implements Reservationy {
    private static RES_CODES: string[] = [];
    private _dow: string;
    private _code: string;

    constructor(numberOfDigits: number = 8) {
        this._dow = this.getDowBooking();
        this._code = this.getCodeBooking(numberOfDigits);
    }

    getDowBooking(): string {
        const randomDate = new Date(Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 7));

        return randomDate.toString().split(' ')[0].toUpperCase();
    }

    getCodeBooking(numberOfDigits: number): string {
        if (Reservation.RES_CODES.length == 36 ** numberOfDigits) 
            throw { message: '\n\n*** There is no more unique booking code. ***\n*** You have to increase the number of digits in booking code! ***\n'};

        let code: string;
        do {
            code = '';
            for (let index = 0; index < numberOfDigits; index++) {
                let asciiCode = Math.floor(Math.random() * 36 + 48);
                asciiCode = (asciiCode >= 58) ? asciiCode + 7 : asciiCode;
                code += String.fromCharCode(asciiCode);
                
            }
        } while (Reservation.RES_CODES.indexOf(code) != -1)
        
        Reservation.RES_CODES.push(code);

        return code;
    }

    toString(): string {
        return `Booking# ${this._code} for ${this._dow}`;
    }
}