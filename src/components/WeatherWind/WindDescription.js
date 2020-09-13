import React from 'react';

import { useSelectState } from '../../shared/hooks/select-state-hook';
import { getWindDirection, getWindPower } from '../../shared/util/get/getWindDescription';

import { CURRENT } from '../../shared/SSOT/timelineCondition';

import SectionTitle from '../../shared/UIElements/SectionTitle';
import Arrow from '../../shared/UIElements/Arrow';

import classes from './WindDescription.module.css';

const WindDescription = () => {
    const [{ wind_speed, wind_deg }] = useSelectState(CURRENT);

    return (
        <div className={classes.wind__container}>
            <SectionTitle>Wind</SectionTitle>
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
