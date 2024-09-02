export default class Humidity extends Number {
    constructor(value: number) {
        super(value);
    }

    get serialize(): { value: number, units: string } {
        return {
            value: this.valueOf(),
            units: '%',
        }
    }
}