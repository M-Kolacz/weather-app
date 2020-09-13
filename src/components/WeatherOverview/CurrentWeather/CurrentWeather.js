import React from 'react';

import { useSelectState } from '../../../shared/hooks/select-state-hook';
import { getTime } from '../../../shared/util/convert/convertTime';
import { currentWeatherSvg } from '../../../shared/util/svg/currentWeatherSvg';

import { CURRENT } from '../../../shared/SSOT/timelineCondition';
import { LONG_ARROW_ALT_DOWN, LONG_ARROW_ALT_UP } from '../../../shared/SSOT/icons';

import Icon from '../../../shared/UIElements/Icon';

import classes from './CurrentWeather.module.css';

const iconStyle = {
    color: 'var(--white)',
    fontSize: 'var(--base-size)',
    display: 'inline-block',
    marginLeft: '5px',
    marginRight: '10px',
};

const CurrentWeather = () => {
    const [{ temp, feels_like, weather }, path] = useSelectState(CURRENT);
    return (
        <div className={classes.current}>
            <p className={classes.current__time}>{getTime(path)}</p>
            <p className={classes.current__dayNight}>
                Day {temp.max}
                <Icon iconName={LONG_ARROW_ALT_UP} style={iconStyle} />
                Night {temp.min}
                <Icon iconName={LONG_ARROW_ALT_DOWN} style={iconStyle} />
            </p>
            <div className={classes.current__container}>
                <div className={classes.current__info}>
                    <p className={classes.current__temperature}>
                        {temp.day} <span className={classes.current__degree}>°C</span>
                    </p>
                    <p className={classes.current__feelsLike}>Feels like {feels_like.day}</p>
                </div>
                <figure className={classes.current__img}>
                    <img
                        src={currentWeatherSvg(weather[0].icon)}
                        alt={weather[0].description}
                        className={classes.current__svg}
                    />
                    <figcaption className={classes.current__descrpition}>
                        {weather[0].description}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default CurrentWeather;
