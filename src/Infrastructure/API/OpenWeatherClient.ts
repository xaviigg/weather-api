import axios, { AxiosInstance } from "axios";
import Coordinates from "../../Domain/ValueObject/Coordinates";
import { OpenWeatherAPIError } from "./Exceptions/OpenWeatherApiError";

class OpenWeatherClient {
    private readonly apiKey: string;
    private readonly axiosInstance: AxiosInstance;

    constructor(
        baseUrl: string,
        apiKey: string,
    ) {
        this.apiKey = apiKey;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            timeout: 5000,
        });
    };

    public async getWeatherByCoordinates(coordinates: Coordinates): Promise<any> {
        try {
            const response = await this.axiosInstance.get(
                `/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appId=${this.apiKey}&units=metric`
            );
            return response.data;
        } catch (error: any) {
            throw new OpenWeatherAPIError(
                'Failed to fetch weather data from OpenWeather',
                error.response.status,
                error.response.data
            );
        }
    }

}

export default OpenWeatherClient;