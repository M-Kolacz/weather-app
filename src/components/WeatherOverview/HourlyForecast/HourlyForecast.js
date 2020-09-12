import React, { useEffect } from 'react';
import { AreaChart, Area, LabelList, XAxis } from 'recharts';

import { useSelectState } from '../../../shared/hooks/select-state-hook';
import { setForecastHours } from '../../../shared/util/sideEffect/setForecastHours';
import { getChartWidth } from '../../../shared/util/get/getChartWidth';

import { HOURLY } from '../../../shared/SSOT/timelineCondition';

import CustomAxisTick from '../../../shared/customCharts/CustomAxisTick';

import classes from './HourlyForecast.module.css';

const HourlyForecast = () => {
    const hourlyForecast = useSelectState(HOURLY);

    useEffect(() => {
        setForecastHours(hourlyForecast);
    });
    const chartWidth = getChartWidth(hourlyForecast.length);
    return (
        <div className={classes.hourlyChart}>
            <AreaChart
                width={chartWidth}
                height={150}
                data={hourlyForecast}
                margin={{
                    top: 20,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id='colorUv' x1='0.5' y1='0' x2='0.5' y2='1'>
                        <stop offset='5%' stopColor='#6D9FC2' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#79A7C9' stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area
                    type='monotone'
                    dataKey='temp'
                    stroke='#78A9C9'
                    fillOpacity={1}
                    fill='url(#colorUv)'
                    isAnimationActive={false}
                >
                    <LabelList dataKey='temp' position='top' fill='#fff' />
                </Area>
                <XAxis
                    dataKey='weather[0].icon'
                    tick={CustomAxisTick}
                    axisLine={false}
                    tickLine={false}
                />
            </AreaChart>
        </div>
    );
};

export default HourlyForecast;
