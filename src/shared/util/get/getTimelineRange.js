export const getTimelineRange = () => {
    const actualHour = new Date().getHours();
    let timeRange = 31;

    if (actualHour < 6) {
        timeRange = 7;
    }
    const todayStartRange = 0;
    const todayEndRange = timeRange - actualHour;
    const tomorrowStartRange = timeRange - actualHour;
    const tomorrowEndRange = timeRange - actualHour + 24;

    return [todayStartRange, todayEndRange, tomorrowStartRange, tomorrowEndRange];
};
