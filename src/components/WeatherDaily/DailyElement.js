import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { getHour } from '../../shared/util/convert/convertTime';
import { weatherIndicators } from '../WeatherDetails/weatherIndicators';
import { currentWeatherSvg } from '../../shared/util/svg/currentWeatherSvg';

import { DAILY } from '../../shared/SSOT/timelineCondition';

import './DailyElementTransition.css';
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
                <CSSTransition in={visible} timeout={200} classNames='dailyElement' unmountOnExit>
                    <div className={classes.element__indicator}>{weatherIndicators(props)}</div>
                </CSSTransition>
            </div>
        </>
    );
};

export default DailyElement;
