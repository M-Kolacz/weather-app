import React from 'react';

import { useSelectState } from '../../shared/hooks/select-state-hook';
import { weatherIndicators } from './weatherIndicators';

import { CURRENT } from '../../shared/SSOT/timelineCondition';

import SectionContainer from '../../shared/UIElements/SectionContainer';
import SectionTitle from '../../shared/UIElements/SectionTitle';

import classes from './WeatherDetails.module.css';

const WeatherDetails = () => {
    const [currentWeather] = useSelectState(CURRENT);
    return (
        <SectionContainer>
            <div className={classes.details}>
                <div className={classes.details__container}>
                    <SectionTitle>Current details</SectionTitle>
                    {weatherIndicators(currentWeather)}
                </div>
            </div>
        </SectionContainer>
    );
};

export default WeatherDetails;
