export default class Wind {
    constructor(
        public speed: number,
        public degree: number,
    ) { }

    get serialize(): { speed: number, degree: number } {
        return {
            speed: this.speed,
            degree: this.degree,
        };
    }

}