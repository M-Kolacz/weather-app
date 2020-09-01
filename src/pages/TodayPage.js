import React from 'react';

import WeatherOverview from '../components/WeatherOverview/WeatherOverview';
import WeatherDetails from '../components/WeatherDetails/WeahterDetails';
import WeatherWind from '../components/WeatherWind/WeatherWind';

const TodayPage = () => {
    return (
        <>
            <WeatherOverview />
            <WeatherDetails />
            <WeatherWind />
        </>
    );
};

export default TodayPage;
