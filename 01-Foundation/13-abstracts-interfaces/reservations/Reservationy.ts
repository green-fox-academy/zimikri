'use strict';

export default interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(numberOfDigits: number): string;
}