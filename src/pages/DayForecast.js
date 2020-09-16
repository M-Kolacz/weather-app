import React from 'react';

import WeatherPrecipitation from '../components/WeatherPrecipitation/WeatherPrecipitation';
import WeatherOverview from '../components/WeatherOverview/WeatherOverview';
import WeatherDetails from '../components/WeatherDetails/WeahterDetails';
import WeatherWind from '../components/WeatherWind/WeatherWind';

const TodayPage = () => {
    return (
        <>
            <WeatherOverview />
            <WeatherDetails />
            <WeatherPrecipitation />
            <WeatherWind />
        </>
    );
};

export default TodayPage;
