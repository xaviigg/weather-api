import Coordinates from "../ValueObject/Coordinates";
import Description from "../ValueObject/Description";
import Humidity from "../ValueObject/Humidity";
import Location from "../ValueObject/Location";
import Temperature from "../ValueObject/Temperature";
import Title from "../ValueObject/Title";
import Wind from "../ValueObject/Wind";

class Weather {
    constructor(
        public coordinates: Coordinates,
        public location: Location,
        public temperature: Temperature,
        public humidity: Humidity,
        public wind: Wind,
        public sunrise: Date,
        public sunset: Date,
        public title: Title,
        public description: Description,
    ) { }

    get serialize() {
        return {
            coordinates: this.coordinates.serialize,
            location: this.location,
            temperature: this.temperature.serialize,
            humidity: this.humidity.serialize,
            wind: this.wind.serialize,
            sunrise: this.sunrise,
            sunset: this.sunset,
            title: this.title,
            description: this.description,
        };
    }
}

export default Weather;