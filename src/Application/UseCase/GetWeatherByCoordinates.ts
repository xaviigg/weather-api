import Weather from '../../Domain/Entity/Weather'
import { WeatherRepository } from '../../Domain/Repository/WeatherRepository'
import Coordinates from '../../Domain/ValueObject/Coordinates'

export class GetWeatherByCoordinates {
    constructor(
        private readonly weatherRepository: WeatherRepository,
    ) { }

    async execute(coordinates: Coordinates): Promise<Weather> {
        return this.weatherRepository.getWeatherByCoordinates(coordinates);
    }
}