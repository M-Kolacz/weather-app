import React from 'react';

import { useSelectState } from '../../shared/hooks/select-state-hook';
import { weatherIndicators } from './weatherIndicators';

import { CURRENT } from '../../shared/SSOT/timelineCondition';

import SectionContainer from '../../shared/UIElements/SectionContainer';
import SectionTitle from '../../shared/UIElements/SectionTitle';

import padding from '../../global/padding.module.css';

const WeatherDetails = () => {
    const [currentWeather] = useSelectState(CURRENT);
    return (
        <SectionContainer>
            <SectionTitle>Current details</SectionTitle>
            <div className={padding.paddingLeft}>{weatherIndicators(currentWeather)}</div>
        </SectionContainer>
    );
};

export default WeatherDetails;
