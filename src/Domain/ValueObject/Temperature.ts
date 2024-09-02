export default class Temperature {
    constructor(
        private current: number,
        private min: number,
        private max: number,
        private feelsLike: number,
    ) { }

    get serialize(): { current: number, min: number, max: number, feelsLike: number, units: string } {
        return {
            current: this.current,
            min: this.min,
            max: this.max,
            feelsLike: this.feelsLike,
            units: '°C',
        };
    }

}