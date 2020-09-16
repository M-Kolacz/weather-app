import { TODAY, TOMORROW } from '../../SSOT/paths';
import { DAILY } from '../../SSOT/timelineCondition';

const todayFormat = new Intl.DateTimeFormat('en', {
    hourCycle: 'h24',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
});

const tomorrowFormat = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
});

const hourFormat = new Intl.DateTimeFormat('en', {
    hourCycle: 'h24',
    hour: 'numeric',
    minute: 'numeric',
});

const dailyFormat = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
});

export const getTime = (path) => {
    const today = new Date();
    const tomorrow = new Date(today);

    switch (path) {
        case TODAY:
            return todayFormat.format(today);

        case TOMORROW:
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrowFormat.format(tomorrow);

        default:
            return tomorrowFormat.format(today);
    }
};

export const getHour = (dt, timeline) => {
    const date = new Date(dt * 1000);

    if (timeline === DAILY) {
        return dailyFormat.format(date);
    }
    return hourFormat.format(date);
};
