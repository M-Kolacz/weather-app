import { getHour } from './convertTime';
export const setForecastHours = (hourlyForecast) => {
    const textLabels = [...document.querySelectorAll('.text-time')];

    if (textLabels[0].textContent === '') {
        textLabels.forEach((label, index) => {
            label.textContent = getHour(hourlyForecast[index].dt);
        });
    }
};
