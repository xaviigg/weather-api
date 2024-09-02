import { GetWeatherByCoordinates } from '../../src/Application/UseCase/GetWeatherByCoordinates';
import Coordinates from '../../src/Domain/ValueObject/Coordinates';
import { OpenWeatherAPIError } from '../../src/Infrastructure/API/Exceptions/OpenWeatherApiError';

describe('GetWeatherByCoordinates', () => {
    const mockRepository = {
        getWeatherByCoordinates: jest.fn()
    };

    const useCase = new GetWeatherByCoordinates(mockRepository);

    it('should return weather data', async () => {
        const mockWeather = { temp: 20 };
        mockRepository.getWeatherByCoordinates.mockResolvedValue(mockWeather);

        const result = await useCase.execute(new Coordinates(41.4, 2.17));

        expect(result).toEqual(mockWeather);
    });

    it('should throw error on repository failure', async () => {
        mockRepository.getWeatherByCoordinates.mockRejectedValue(new OpenWeatherAPIError('API Error', 500, 'Server Error'));

        await expect(useCase.execute(new Coordinates(41.4, 2.17)))
            .rejects
            .toThrow(OpenWeatherAPIError);
    });
});
