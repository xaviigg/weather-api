export default class Coordinates {
    constructor(
        private _latitude: number,
        private _longitude: number,
    ) { }

    get latitude(): number {
        return this._latitude;
    }

    get longitude(): number {
        return this._longitude;
    }

    get serialize(): object {
        return {
            latitude: this._latitude,
            longitude: this._longitude,
        };
    }
}