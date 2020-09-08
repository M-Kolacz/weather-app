import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TODAY, TOMORROW } from '../SSOT/paths';
import { CURRENT, HOURLY } from '../SSOT/timelineCondition';

export const useSelectState = (timeline) => {
    const { path } = useRouteMatch();
    const weatherData = useSelector((state) => state);

    let state;
    if (timeline === CURRENT) {
        if (path === TODAY) state = weatherData.currentWeather;
        else if (path === TOMORROW) state = weatherData.hourlyForecast[24];
    } else if (timeline === HOURLY) {
        if (path === TODAY) state = weatherData.hourlyForecast.slice(0, 18);
        else if (path === TOMORROW) state = weatherData.hourlyForecast.slice(18, 36);
    }
    return state;
};
