import React from 'react';

import { useSelectState } from '../../../shared/hooks/select-state-hook';
import { rowSvg, rowTime, rowVolume } from './tableRows.js';

import { HOURLY } from '../../../shared/SSOT/timelineCondition';

import classes from './PrecipitationTable.module.css';

const PrecipitationTable = () => {
    const [hourlyForecast] = useSelectState(HOURLY);
    return (
        <table className={classes.table}>
            <tbody className={classes.table__body}>
                <tr>
                    <td></td>
                    {rowSvg(hourlyForecast)}
                </tr>
                <tr>
                    <td className={classes.table__td}>Volume (mm)</td>
                    {rowVolume(hourlyForecast)}
                </tr>
                <tr>
                    <td className={classes.table__td}></td>
                    {rowTime(hourlyForecast)}
                </tr>
            </tbody>
        </table>
    );
};

export default PrecipitationTable;
