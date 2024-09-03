# Weather API

### Architecture

This project follows **Hexagonal Architecture** and **Domain-Driven Design** principles to ensure a clean and mantainable codebase. The project is organized into the following main directories:

- **Application**: Contains use cases and application logic.
- **Domain**: Holds the domain entities. It defines the rules of the application and is independent of other layers.
- **Infrastructure**: Provides implementations for external services. This includes communication with external APIs, for example.
- **Interface**: This layer manages the communication with the outside world and includes controllers, routes and request/response handling. It translates user interactions into actions that the application proccesses.

### Setup

1. **Node version**: This project uses Node.js version specified in the `.nvmrc` file. Make sure you have nvm installed and run

```
nvm use
```

2. **Environment variables**: Create an `.env` file in the root directory of the project including the following variables:

```
OPENWEATHER_API_BASE_URL=<your_openweather_api_base_url>
OPENWEATHER_API_KEY=<your_openweather_api_key>
```

### Commands

- **Run the app**: Starts the application and listens for changes to reload automatically.

```
npm run dev
```

- **Run tests**: Run all tests suites

```
npm run test
```

- **Build the app**: Compiles the TypeScript code to JavaScript and puts it under `dist` directory

```
npm run build
```

### API Endpoint

#### `/api/weather`

This endpoint accepts the following query parameters:

- `lat`: Latitude
- `long`: Longitude

**Example Request**

```
curl -X GET "http://localhost:3000/api/weather?lat=41.4&long=2.17"
```

**Example Response format**

```
{
  "coordinates": {
    "lat": 41.4,
    "long": 2.17
  },
  "location": "Sant Martí",
  "temperature": {
    "current": 15,
    "min": 10,
    "max": 20,
    "feelsLike": 15,
    "units": "°C"
  },
  "humidity": {
    "value": 50,
    "units": "%"
  },
  "wind": {
    "speed": 5,
    "degree": 180
  },
  "sunrise": "2021-01-13T16:00:00.000Z",
  "sunset": "2021-01-14T04:00:00.000Z",
  "title": "Clouds",
  "description": "scattered clouds"
}
```

This endpoint uses the provided latitude and longitude to fetch weather data from the OpenWeather API and returns the most valuable information in the specified format.
