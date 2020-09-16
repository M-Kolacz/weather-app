import React from 'react';

import { useSelectState } from '../../../shared/hooks/select-state-hook';

import { CURRENT } from '../../../shared/SSOT/timelineCondition';

import padding from '../../../global/padding.module.css';

const PrecipationAmount = () => {
    const [dailyForecast] = useSelectState(CURRENT);
    const rainValue = dailyForecast?.rain;

    return <p className={padding.paddingLeft}>Total daily volume {rainValue || 0} mm</p>;
};

export default PrecipationAmount;
