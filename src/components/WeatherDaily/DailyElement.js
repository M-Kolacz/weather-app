import React, { useState } from 'react';

import { getHour } from '../../shared/util/convert/convertTime';
import { weatherIndicators } from '../WeatherDetails/weatherIndicators';
import { currentWeatherSvg } from '../../shared/util/svg/currentWeatherSvg';

import { DAILY } from '../../shared/SSOT/timelineCondition';

import classes from './DailyElement.module.css';

const DailyElement = (props) => {
    const [visible, setVisible] = useState(false);

    const toggleDescription = () => {
        setVisible((prevState) => !prevState);
    };

    return (
        <>
            <div className={classes.element}>
                <div className={classes.element__container} onClick={toggleDescription}>
                    <div className={classes.element__description}>
                        <p>{getHour(props.dt, DAILY)}</p>
                        <p className={classes.element__descriptionWeather}>
                            {props.weather[0].description}
                        </p>
                    </div>
                    <div className={classes.element__weather}>
                        <img src={currentWeatherSvg(props.weather[0].icon)} alt='' />
                        <span>
                            <span className={classes.element__weatherDescription}>
                                {props.temp.max}
                            </span>
                            <span className={classes.element__weatherDescription}>
                                {props.temp.min}
                            </span>
                        </span>
                    </div>
                </div>
                {visible && (
                    <div className={classes.element__indicator}>{weatherIndicators(props)}</div>
                )}
            </div>
        </>
    );
};

export default DailyElement;
