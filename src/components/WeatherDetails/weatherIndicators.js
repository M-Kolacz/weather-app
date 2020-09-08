import React from 'react';

import {
    DEW_POINT,
    HUMIDITY,
    PRESSURE,
    UV_INDEX,
    VISIBILITY,
} from '../../shared/SSOT/weatherIndicators';

import DetailIndicator from './DetailIndicator';

export const weatherIndicators = (currentWeather) => {
    const initialArray = [];

    Object.keys(currentWeather).forEach((key) => {
        switch (key) {
            case 'humidity':
                return initialArray.push(
                    <DetailIndicator
                        indicator={HUMIDITY}
                        value={`${currentWeather[key]}%`}
                        key={key}
                        order={1}
                    />,
                );
            case 'dew_point':
                return initialArray.push(
                    <DetailIndicator
                        indicator={DEW_POINT}
                        value={`${currentWeather[key]}°C`}
                        key={key}
                        order={2}
                    />,
                );
            case 'pressure':
                return initialArray.push(
                    <DetailIndicator
                        indicator={PRESSURE}
                        value={`${currentWeather[key]} mBar`}
                        key={key}
                        order={3}
                    />,
                );
            case 'uvi':
                return initialArray.push(
                    <DetailIndicator
                        indicator={UV_INDEX}
                        value={`${currentWeather[key]}`}
                        key={key}
                        order={4}
                    />,
                );
            case 'visibility':
                return initialArray.push(
                    <DetailIndicator
                        indicator={VISIBILITY}
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
