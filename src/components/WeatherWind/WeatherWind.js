import React from 'react';

import SectionContainer from '../../shared/UIElements/SectionContainer';
import WindDescription from './WindDescription';
import WindChart from './WindChart';

const WeatherWind = () => {
    return (
        <SectionContainer>
            <WindDescription />
            <WindChart />
        </SectionContainer>
    );
};

export default WeatherWind;
