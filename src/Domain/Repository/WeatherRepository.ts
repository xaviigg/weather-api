import Weather from "../Entity/Weather";
import Coordinates from "../ValueObject/Coordinates";

export interface WeatherRepository {
    getWeatherByCoordinates(coordinates: Coordinates): Promise<Weather>;
}