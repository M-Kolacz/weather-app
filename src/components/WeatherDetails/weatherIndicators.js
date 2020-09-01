import React from 'react';

import DetailIndicator from './DetailIndicator';

export const weatherIndicators = (currentWeather) => {
    const initialArray = [];

    Object.keys(currentWeather).forEach((key) => {
        switch (key) {
            case 'humidity':
                return initialArray.push(
                    <DetailIndicator
                        indicator={'Humidity'}
                        value={`${currentWeather[key]}%`}
                        key={key}
                        order={1}
                    />,
                );
            case 'dew_point':
                return initialArray.push(
                    <DetailIndicator
                        indicator='Dew point'
                        value={`${currentWeather[key]}°C`}
                        key={key}
                        order={2}
                    />,
                );
            case 'pressure':
                return initialArray.push(
                    <DetailIndicator
                        indicator='Pressure'
                        value={`${currentWeather[key]} mBar`}
                        key={key}
                        order={3}
                    />,
                );
            case 'uvi':
                return initialArray.push(
                    <DetailIndicator
                        indicator={'UV index'}
                        value={`${currentWeather[key]}`}
                        key={key}
                        order={4}
                    />,
                );
            case 'visibility':
                return initialArray.push(
                    <DetailIndicator
                        indicator={'Visibility'}
                        value={`${currentWeather[key]} km`}
                        key={key}
                        order={5}
                    />,
                );

            default:
                return;
        }
    });
    return initialArray.sort((a, b) => a.props.order - b.props.order);
};
