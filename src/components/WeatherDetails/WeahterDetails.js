import React from 'react';
import { useSelector } from 'react-redux';

import { weatherIndicators } from './weatherIndicators';
import SectionContainer from '../../shared/UIElements/SectionContainer';

import classes from './WeatherDetails.module.css';

const WeatherDetails = () => {
    const currentWeather = useSelector((state) => state.currentWeather);
    return (
        <SectionContainer>
            <div className={classes.details}>
                <div className={classes.details__container}>
                    <h2 className={classes.details__title}>Current details</h2>
                    {weatherIndicators(currentWeather)}
                </div>
            </div>
        </SectionContainer>
    );
};

export default WeatherDetails;
