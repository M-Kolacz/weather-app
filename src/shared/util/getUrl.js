export const getCityUrl = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};

export const getWeatherForecastUrl = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};
