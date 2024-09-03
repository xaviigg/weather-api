import axios, { AxiosInstance } from 'axios';
import OpenWeatherClient from '../../src/Infrastructure/API/OpenWeatherClient';
import { OpenWeatherAPIError } from '../../src/Infrastructure/API/Exceptions/OpenWeatherApiError';
import Coordinates from '../../src/Domain/ValueObject/Coordinates';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OpenWeatherClient', () => {
    const apiKey = 'dummy_api_key';
    let client = new OpenWeatherClient(apiKey);
    let axiosInstance: any;
    beforeEach(() => {
        mockedAxios.create.mockReturnValue({
            get: jest.fn(),
        } as any);
        client = new OpenWeatherClient('dummy_api_key');
        axiosInstance = client['axiosInstance'] as jest.Mocked<AxiosInstance>;
    });

    it('should fetch weather data successfully', async () => {
        const mockResponse = { data: { temp: 20 }, status: 200 };
        const coordinates = new Coordinates(41.4, 2.17);

        axiosInstance.get.mockResolvedValue(mockResponse);

        const result = await client.getWeatherByCoordinates(coordinates);

        expect(result).toEqual(mockResponse.data);
    });

    it('should handle API errors', async () => {
        axiosInstance.get.mockRejectedValue({
            response: { status: 404, data: 'Not Found' }
        });

        await expect(client.getWeatherByCoordinates(new Coordinates(41.4, 2.17)))
            .rejects
            .toThrow(OpenWeatherAPIError);
    });
});