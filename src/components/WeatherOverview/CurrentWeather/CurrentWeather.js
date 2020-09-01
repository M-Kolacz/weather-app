import React from 'react';
import { useSelector } from 'react-redux';

import { getTime } from '../../../shared/util/convertTime';
import { currentWeatherSvg } from '../../../shared/util/currentWeatherSvg';

import classes from './CurrentWeather.module.css';

const CurrentWeather = () => {
    const { dt, temp, feels_like, weather } = useSelector((state) => state.currentWeather);
    return (
        <div className={classes.current}>
            <p className={classes.current__time}>{getTime(dt)}</p>
            <div className={classes.current__container}>
                <div className={classes.current__info}>
                    <p className={classes.current__temperature}>
                        {temp} <span className={classes.current__degree}>°C</span>
                    </p>
                    <p className={classes.current__feelsLike}>Feels like {feels_like}</p>
                </div>
                <figure className={classes.current__img}>
                    <img
                        src={currentWeatherSvg(weather[0].icon)}
                        alt=''
                        className={classes.current__svg}
                    />
                    <figcaption className={classes.description}>
                        {weather[0].description}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default CurrentWeather;