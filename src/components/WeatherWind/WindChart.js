import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

import { useSelectState } from '../../shared/hooks/select-state-hook';
import { windArrows } from '../../shared/customCharts/windArrows';
import { getChartWidth } from '../../shared/util/get/getChartWidth';

import { HOURLY } from '../../shared/SSOT/timelineCondition';

import classes from './WindChart.module.css';

const WindChart = () => {
    const hourlyForecast = useSelectState(HOURLY);

    const arrows = windArrows(hourlyForecast);
    const chartWidth = getChartWidth(hourlyForecast.length);
    return (
        <div className={classes.windChart}>
            <div className={classes.arrows} style={{ width: chartWidth - 55 }}>
                {arrows}
            </div>
            <BarChart
                width={chartWidth}
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
