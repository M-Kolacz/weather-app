import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { getWeatherForecastUrl } from '../util/get/getUrl';
import { convertHourly, convertDaily } from '../util/convert/convertApiData';

import * as actionTypes from '../../store/actions/actionTypes';
import { TODAY } from '../SSOT/paths';

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
            const { daily, hourly } = weatherData.data;

            setActualForecast({
                dailyForecast: convertDaily(daily),
                hourlyForecast: convertHourly(hourly),
            });

            setIsLoading(false);
            document.activeElement.blur();
            history.push(TODAY);
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
            const { daily, hourly } = weatherData.data;

            setActualForecast({
                dailyForecast: daily,
                hourlyForecast: convertHourly(hourly),
            });

            setIsLoading(false);
            document.activeElement.blur();
            history.push(TODAY);
        } catch (err) {
            setError(true);
            setIsLoading(false);
        }
    };

    return { fetchData, fetchDataByLocalization, error, isLoading };
};
