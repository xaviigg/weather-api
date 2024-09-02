import express from 'express';
import dotenv from 'dotenv';
import OpenWeatherClient from './Infrastructure/API/OpenWeatherClient';
import WeatherController from './Interface/Controllers/WeatherController';
dotenv.config();

const app = express();

const weatherClient = new OpenWeatherClient(process.env.OPENWEATHER_API_KEY!);
const weatherController = new WeatherController(weatherClient);

app.get('/api/weather', (req, res) => weatherController.getWeather(req, res));

export default app;