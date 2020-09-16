import { getHour } from './convertTime';

const convertToInteger = (number) => {
    return Number(number.toFixed(0));
};
const convertToTemp = (temp) => {
    return convertToInteger(temp) + '°';
};

const convertToKilo = (value) => {
    return value / 1000;
};

const convertMetresPerSecond = (value) => {
    return convertToInteger(value * 3.6);
};

export const convertHourly = (hourly) => {
    return hourly.map((hour) => ({
        ...hour,
        temp: convertToInteger(hour.temp),
        feels_like: convertToTemp(hour.feels_like),
        dew_point: convertToInteger(hour.dew_point),
        pressure: convertToKilo(hour.pressure),
        visibility: convertToKilo(hour.visibility),
        wind_speed: convertMetresPerSecond(hour.wind_speed),
        hour: getHour(hour.dt),
    }));
};
export const convertDaily = (daily) => {
    return daily.map((day) => ({
        ...day,
        dew_point: convertToInteger(day.dew_point),
        wind_speed: convertMetresPerSecond(day.wind_speed),

        pressure: convertToKilo(day.pressure),
        uvi: convertToInteger(day.uvi),
        feels_like: {
            ...day.feels_like,
            day: convertToTemp(day.feels_like.day),
        },
        temp: {
            ...day.temp,
            day: convertToInteger(day.temp.day),
            min: convertToTemp(day.temp.min),
            max: convertToTemp(day.temp.max),
        },
    }));
};
