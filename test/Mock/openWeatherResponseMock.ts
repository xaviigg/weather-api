
const openWeatherResponseMock: object = {
    coord: {
        lat: 41.4000,
        lon: 2.17
    },
    name: 'Sant Martí',
    main: {
        temp: 15,
        temp_min: 10,
        temp_max: 20,
        feels_like: 15,
        humidity: 50
    },
    wind: {
        speed: 5,
        deg: 180
    },
    sys: {
        sunrise: 1610553600,
        sunset: 1610596800
    },
    weather: [
        {
            main: 'Clouds',
            description: 'scattered clouds'
        }
    ]
};


export default openWeatherResponseMock;