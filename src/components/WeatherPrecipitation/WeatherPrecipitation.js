import React from 'react';

import PrecipitationTable from './PrecipitationTable/PrecipitationTable';
import SectionContainer from '../../shared/UIElements/SectionContainer';
import PrecipationAmount from './PrecipationAmount/PrecipationAmount';
import SectionTitle from '../../shared/UIElements/SectionTitle';

import ScrollContainer from '../../shared/UIElements/ScrollContainer';

const WeatherPrecipitation = () => {
    return (
        <SectionContainer>
            <SectionTitle>Precipitation</SectionTitle>
            <ScrollContainer>
                <PrecipitationTable />
            </ScrollContainer>
            <PrecipationAmount />
        </SectionContainer>
    );
};

export default WeatherPrecipitation;
