import React from 'react';

import { hourlyForecastSvg } from '../util/svg/hourlyForecastSvg';

const CustomAxisTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <svg x={-30} y={-50} width={1000} height={1000} viewBox='0 0 1024 1024' fill='#666'>
                {hourlyForecastSvg(payload.value)}
            </svg>

            <text x={22} y={4} dy={16} textAnchor='end' fill='#000' className='text-time'></text>
        </g>
    );
};

export default CustomAxisTick;
