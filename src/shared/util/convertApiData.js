import { getHour } from './convertTime';

const fixToInteger = (number) => {
    return Number(number.toFixed(0));
};
const fixToKilo = (value) => {
    return value / 1000;
};

const convertMetresPerSecond = (value) => {
    return fixToInteger(value * 3.6);
};

export const convertCurrent = (current) => {
    const { temp, feels_like, dew_point, pressure, visibility, wind_speed } = current;

    return {
        ...current,
        temp: fixToInteger(temp),
        feels_like: fixToInteger(feels_like),
        dew_point: fixToInteger(dew_point),
        pressure: fixToKilo(pressure),
        visibility: fixToKilo(visibility),
        wind_speed: convertMetresPerSecond(wind_speed),
    };
};

export const convertHourly = (hourly) => {
    return hourly.map((hour) => ({
        ...hour,
        temp: fixToInteger(hour.temp),
        wind_speed: convertMetresPerSecond(hour.wind_speed),
        hour: getHour(hour.dt),
    }));
};

export const fixWindDegree = (degree) => {
    return degree - 45;
};
