import request from 'supertest';
import express from 'express';
import WeatherController from '../../../src/Interface/Controllers/WeatherController';
import OpenWeatherClient from '../../../src/Infrastructure/API/OpenWeatherClient';
import openWeatherResponseMock from '../../Mock/openWeatherResponseMock';

jest.mock('../../../src/Infrastructure/API/OpenWeatherClient');

const app = express();
app.use(express.json());

const openWeatherClient = new OpenWeatherClient('dummy_api_key', 'http://dummy_url');
const weatherController = new WeatherController(openWeatherClient);

app.get('/api/weather', weatherController.getWeather.bind(weatherController));

describe('WeatherController', () => {
    let mockGetWeatherByCoordinatesClient: jest.SpyInstance;

    beforeEach(() => {
        mockGetWeatherByCoordinatesClient = jest.spyOn(openWeatherClient, 'getWeatherByCoordinates')
            .mockResolvedValue(openWeatherResponseMock);
    });

    it('should return weather data successfully', async () => {
        const response = await request(app)
            .get('/api/weather')
            .query({ lat: 41.4, long: 2.17 });
        console.log({ response });
        expect(response.status).toBe(200);
    });

    it('should return 400 for validation errors', async () => {
        const response = await request(app)
            .get('/api/weather')
            .query({ lat: 'invalid', long: 'input' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid coordinates' });
    });
});
