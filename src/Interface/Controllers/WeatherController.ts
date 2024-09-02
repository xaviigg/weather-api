import { GetWeatherByCoordinates } from "../../Application/UseCase/GetWeatherByCoordinates";
import { Request, Response } from "express";
import Coordinates from "../../Domain/ValueObject/Coordinates";
import OpenWeatherClient from "../../Infrastructure/API/OpenWeatherClient";
import OpenWeatherRepository from "../../Infrastructure/Repository/OpenWeatherRepository";
import { GetWeatherRequestDTO } from "../DTO/GetWeatherRequestDTO";
import ValidationError from "../../Shared/Exceptions/ValidationError";
import { OpenWeatherAPIError } from "../../Infrastructure/API/Exceptions/OpenWeatherApiError";

class WeatherController {
    private readonly getWeatherUseCase: GetWeatherByCoordinates;
    constructor(
        openWeatherClient: OpenWeatherClient
    ) {
        const openWeatherRepository = new OpenWeatherRepository(openWeatherClient);

        this.getWeatherUseCase = new GetWeatherByCoordinates(openWeatherRepository);
    }

    async getWeather(req: Request, res: Response): Promise<void> {
        try {
            const getWeatherRequestDTO = new GetWeatherRequestDTO(req.query.lat, req.query.long);
            const coordinates = getWeatherRequestDTO.toCoordinates;

            const weather = await this.getWeatherUseCase.execute(coordinates);
            res.status(200).json({ weather: weather.serialize });
        } catch (error: any) {
            if (error instanceof ValidationError) res.status(400).json({ error: error.message });
            else if (error instanceof OpenWeatherAPIError) res.status(error.statusCode).json({ error: error.details });
            else res.status(500).json({ error: error.message });
        }
    }
}

export default WeatherController;