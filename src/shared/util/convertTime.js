const getNameMonth = (monthInNumber) => {
    switch (monthInNumber) {
        case 0:
            return 'January';

        case 1:
            return 'February';

        case 2:
            return 'March';

        case 3:
            return 'April';

        case 4:
            return 'May';

        case 5:
            return 'June';

        case 6:
            return 'July';

        case 7:
            return 'August';

        case 8:
            return 'September';

        case 9:
            return 'October';

        case 10:
            return 'November';

        case 11:
            return 'December';

        default:
            return 'January';
    }
};
const getCorrectHours = (Date) => {
    return Date.getHours() < 10 ? '0' + Date.getHours() : Date.getHours();
};
const getCorrectMinutes = (Date) => {
    return Date.getMinutes() < 10 ? '0' + Date.getMinutes() : Date.getMinutes();
};

const getDate = (dt) => {
    return new Date(dt * 1000);
};

export const getTime = (dt) => {
    const ActualDate = getDate(dt);
    return `${ActualDate.getDate()} ${getNameMonth(ActualDate.getMonth())}, ${getCorrectHours(
        ActualDate,
    )}:${getCorrectMinutes(ActualDate)}`;
};

export const getHour = (dt) => {
    const ActualDate = getDate(dt);
    return `${getCorrectHours(ActualDate)}:${getCorrectMinutes(ActualDate)}`;
};
