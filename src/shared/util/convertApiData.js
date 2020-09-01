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

export const convertCurrent = (current) => {
    const { temp, feels_like, dew_point, pressure, visibility, wind_speed } = current;

    return {
        ...current,
        temp: convertToInteger(temp),
        feels_like: convertToTemp(feels_like),
        dew_point: convertToInteger(dew_point),
        pressure: convertToKilo(pressure),
        visibility: convertToKilo(visibility),
        wind_speed: convertMetresPerSecond(wind_speed),
    };
};

export const convertHourly = (hourly) => {
    return hourly.map((hour) => ({
        ...hour,
        temp: convertToInteger(hour.temp),
        wind_speed: convertMetresPerSecond(hour.wind_speed),
        hour: getHour(hour.dt),
    }));
};

export const fixWindDegree = (degree) => {
    return degree - 45;
};
