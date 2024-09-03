import Weather from "../../Domain/Entity/Weather";
import { WeatherRepository } from "../../Domain/Repository/WeatherRepository";
import Coordinates from "../../Domain/ValueObject/Coordinates";
import Description from "../../Domain/ValueObject/Description";
import Humidity from "../../Domain/ValueObject/Humidity";
import Location from "../../Domain/ValueObject/Location";
import Temperature from "../../Domain/ValueObject/Temperature";
import Title from "../../Domain/ValueObject/Title";
import Wind from "../../Domain/ValueObject/Wind";
import OpenWeatherClient from "../API/OpenWeatherClient";

export default class OpenWeatherRepository implements WeatherRepository {
    constructor(
        private readonly openWeatherClient: OpenWeatherClient
    ) { }

    public async getWeatherByCoordinates(coordinates: Coordinates): Promise<Weather> {
        const data = await this.openWeatherClient.getWeatherByCoordinates(coordinates);

        return new Weather(
            new Coordinates(data.coord.lat, data.coord.lon),
            new Location(data.name),
            new Temperature(
                data.main.temp,
                data.main.temp_min,
                data.main.temp_max,
                data.main.feels_like,
            ),
            new Humidity(data.main.humidity),
            new Wind(data.wind.speed, data.wind.deg),
            new Date(data.sys.sunrise * 1000),
            new Date(data.sys.sunset * 1000),
            new Title(data.weather[0].main),
            new Description(data.weather[0].description)
        );
    }
}