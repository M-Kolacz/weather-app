import React from 'react';

import SectionContainer from '../../shared/UIElements/SectionContainer';
import WindDescription from './WindDescription';
import WindChart from './WindChart';

const WeatherWind = () => {
    return (
        <SectionContainer>
            <div className='wind'>
                <WindDescription />
                <WindChart />
            </div>
        </SectionContainer>
    );
};

export default WeatherWind;
