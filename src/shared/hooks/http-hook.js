import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as actionTypes from '../../store/actions/actionTypes';
import { getWeatherForecastUrl } from '../util/getUrl';
import { convertCurrent, convertHourly } from '../util/convertApiData';

export const useHttpClient = () => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const dispatch = useDispatch();

    const setActualForecast = useCallback(
        (weatherForecast) => {
            dispatch({ type: actionTypes.SET_FORECAST, weatherForecast });
        },
        [dispatch],
    );

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            setError(false);

            const cityCoordinates = await axios(url);
            const { lat, lon } = cityCoordinates.data.coord;

            const weatherData = await axios(getWeatherForecastUrl(lat, lon));
            const { current, daily, hourly } = weatherData.data;

            setActualForecast({
                currentWeather: convertCurrent(current),
                dailyForecast: daily,
                hourlyForecast: convertHourly(hourly),
            });

            setIsLoading(false);
            document.activeElement.blur();
            history.push('/today');
        } catch (err) {
            setError(true);
            setIsLoading(false);
        }
    };
    const fetchDataByLocalization = async ({ lat, lon }) => {
        try {
            setIsLoading(true);
            setError(false);

            const weatherData = await axios(getWeatherForecastUrl(lat, lon));
            const { current, daily, hourly } = weatherData.data;

            setActualForecast({
                currentWeather: convertCurrent(current),
                dailyForecast: daily,
                hourlyForecast: convertHourly(hourly),
            });

            setIsLoading(false);
            document.activeElement.blur();
            history.push('/today');
        } catch (err) {
            setError(true);
            setIsLoading(false);
        }
    };

    return { fetchData, fetchDataByLocalization, error, isLoading };
};
