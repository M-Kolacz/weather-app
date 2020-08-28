import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentWeather: {},
    hourlyForecast: [],
    dailyForecast: [],
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FORECAST:
            return { ...action.weatherForecast };

        default:
            return state;
    }
};

export default weatherReducer;
