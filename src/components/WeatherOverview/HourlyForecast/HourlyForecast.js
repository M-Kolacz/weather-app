import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AreaChart, Area, LabelList, XAxis } from 'recharts';

import { hourlyForecastSvg } from '../../../shared/util/hourlyForecastSvg';
import { setForecastHours } from '.././../../shared/util/setForecastHours';

import classes from './HourlyForecast.module.css';

const HourlyForecast = () => {
    const hourlyForecast = useSelector((state) => state.hourlyForecast.slice(0, 18));

    useEffect(() => {
        setForecastHours(hourlyForecast);
    });

    const CustomizedAxisTick = ({ x, y, payload }) => {
        return (
            <g transform={`translate(${x},${y})`}>
                <svg x={-30} y={-50} width={1000} height={1000} viewBox='0 0 1024 1024' fill='#666'>
                    {hourlyForecastSvg(payload.value)}
                </svg>

                <text
                    x={22}
                    y={4}
                    dy={16}
                    textAnchor='end'
                    fill='#000'
                    className='text-time'
                ></text>
            </g>
        );
    };
    return (
        <div className={classes.hourlyChart}>
            <AreaChart
                width={1000}
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
                    tick={CustomizedAxisTick}
                    axisLine={false}
                    tickLine={false}
                />
            </AreaChart>
        </div>
    );
};

export default HourlyForecast;
