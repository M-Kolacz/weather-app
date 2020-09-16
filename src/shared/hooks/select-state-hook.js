import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getTimelineRange } from '../util/get/getTimelineRange';

import { TODAY, TOMORROW } from '../SSOT/paths';
import { CURRENT, HOURLY, DAILY } from '../SSOT/timelineCondition';

export const useSelectState = (timeline) => {
    const { path } = useRouteMatch();
    const weatherData = useSelector((state) => state);

    const [todayStart, todayEnd, tomorrowStart, tomorrowEnd] = getTimelineRange();

    let state;

    if (timeline === CURRENT) {
        if (path === TODAY) state = weatherData.dailyForecast[0];
        else if (path === TOMORROW) state = weatherData.dailyForecast[1];
    } else if (timeline === HOURLY) {
        if (path === TODAY) state = weatherData.hourlyForecast.slice(todayStart, todayEnd);
        else if (path === TOMORROW)
            state = weatherData.hourlyForecast.slice(tomorrowStart, tomorrowEnd);
    } else if (timeline === DAILY) state = weatherData.dailyForecast;

    return [state, path];
};
