import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

import Arrow from '../../shared/UIElements/Arrow';

import classes from './WindChart.module.css';

const WindChart = () => {
    const hourlyForecast = useSelector((state) => state.hourlyForecast.slice(0, 18));
    console.log(hourlyForecast);
    const arrows = hourlyForecast.map((arrow, index) => (
        <span className={classes.arrows__container} key={`arrow${index}`}>
            <Arrow windDegree={arrow.wind_deg} customStyle={{ fontSize: '16px' }} />
        </span>
    ));
    return (
        <div className={classes.windChart}>
            <div className={classes.arrows}>{arrows}</div>
            <BarChart
                width={990}
                height={120}
                data={hourlyForecast}
                margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
            >
                <Bar
                    dataKey='wind_speed'
                    fill='#03A8F6'
                    minPointSize={1}
                    label={{ position: 'top', fill: 'var(--black)' }}
                    isAnimationActive={false}
                ></Bar>
                <XAxis
                    dataKey='hour'
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: '15px' }}
                />
                <YAxis domain={[0, 30]} hide />
            </BarChart>
        </div>
    );
};

export default WindChart;
