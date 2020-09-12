import React from 'react';

import Arrow from '../UIElements/Arrow';

import classes from './windArrows.module.css';

export const windArrows = (hourlyForecast) => {
    return hourlyForecast.map((arrow, index) => (
        <span className={classes.arrows__container} key={`arrow${index}`}>
            <Arrow windDegree={arrow.wind_deg} customStyle={{ fontSize: '16px' }} />
        </span>
    ));
};
