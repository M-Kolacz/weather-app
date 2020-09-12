import { getHour } from '../convert/convertTime';
export const setForecastHours = (hourlyForecast) => {
    const textLabels = [...document.querySelectorAll('.text-time')];

    textLabels.forEach((label, index) => {
        label.textContent = getHour(hourlyForecast[index].dt);
    });
};
