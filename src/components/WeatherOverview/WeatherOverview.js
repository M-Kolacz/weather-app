import React from 'react';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import HourlyForecast from './HourlyForecast/HourlyForecast';

import classes from './WeatherOverview.module.css';

const WeatherOverview = () => {
    return (
        <section className={classes.weatherOverview}>
            <CurrentWeather />
            <HourlyForecast />
        </section>
    );
};

export default WeatherOverview;
