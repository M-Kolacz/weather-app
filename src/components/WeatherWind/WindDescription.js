import React from 'react';
import { useSelector } from 'react-redux';

import { getWindDirection, getWindPower } from '../../shared/util/getWindDescription';
import Arrow from '../../shared/UIElements/Arrow';

import classes from './WindDescription.module.css';

const WindDescription = () => {
    const { wind_speed, wind_deg } = useSelector((state) => state.currentWeather);
    return (
        <div className={classes.wind__container}>
            <h2 className={classes.wind__title}>Wind</h2>
            <div className={classes.wind__represent}>
                <p className={classes.wind__value}>{wind_speed}</p>
                <div className={classes.wind_wrapper}>
                    <Arrow windDegree={wind_deg} />
                    <span className={classes.wind__units}>km/h</span>
                </div>
                <div className={classes.wind__description}>
                    <p className={classes.wind__power}>{getWindPower(wind_speed)}</p>
                    <p className={classes.wind__direction}>From {getWindDirection(wind_deg)}</p>
                </div>
            </div>
        </div>
    );
};

export default WindDescription;
