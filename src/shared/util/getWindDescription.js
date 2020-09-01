export const getWindPower = (speed) => {
    if (speed <= 5) {
        return 'Light';
    } else if (speed <= 11) return 'Light breeze';
    else if (speed <= 19) return 'Gentle breeze';
    else if (speed <= 38) return 'Fresh breeze';
    else if (speed <= 61) return 'Strong wind';
    else if (speed <= 74) return 'Gale';
    else if (speed <= 102) return 'Storm';
    else if (speed > 102) return 'Hurricane force';
};
export const getWindDirection = (degree) => {
    if (degree >= 337.5 || degree < 22.5) return 'north';
    else if (degree >= 22.5 && degree < 67.5) return 'north east';
    else if (degree >= 67.5 && degree < 112.5) return 'east';
    else if (degree >= 112.5 && degree < 157.5) return 'south east';
    else if (degree >= 157.5 && degree < 202.5) return 'south';
    else if (degree >= 202.5 && degree < 247.5) return 'south west';
    else if (degree >= 247.5 && degree < 292.5) return 'west';
    else if (degree >= 292.5 && degree < 337.5) return 'north west';
};
