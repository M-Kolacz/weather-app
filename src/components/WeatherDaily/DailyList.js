import React from 'react';

import { useSelectState } from '../../shared/hooks/select-state-hook';

import { DAILY } from '../../shared/SSOT/timelineCondition';

import DailyElement from './DailyElement';

const DailyList = () => {
    const [dailyForecast] = useSelectState(DAILY);

    return dailyForecast.map((dailyWeather) => <DailyElement {...dailyWeather} />);
};

export default DailyList;
