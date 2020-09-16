import React from 'react';

import { getHour } from '../../../shared/util/convert/convertTime';
import { getWaterDropSvg } from './getWaterDropSvg';

import classes from './PrecipitationTable.module.css';

export const rowSvg = (hourlyForecast) => {
    return hourlyForecast.map((hour) => {
        const rainValue = hour.rain?.['1h'];
        return (
            <td className={classes.table__td}>
                <svg x='0px' y='0px' viewBox='0 0 512 512' className={classes.svg}>
                    {getWaterDropSvg(rainValue)}
                </svg>
            </td>
        );
    });
};
export const rowVolume = (hourlyForecast) => {
    return hourlyForecast.map((hour) => (
        <td className={classes.table__td}>{hour.rain?.['1h'] || '-'}</td>
    ));
};

export const rowTime = (hourlyForecast) => {
    return hourlyForecast.map(({ dt }) => <td className={classes.table__td}>{getHour(dt)}</td>);
};
