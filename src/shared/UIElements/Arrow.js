import React from 'react';

import Icon from './Icon';

const Arrow = ({ windDegree, customStyle }) => {
    const style = {
        ...customStyle,
        transform: `rotate(${windDegree}deg)`,
        color: 'var(--arrow-color)',
    };
    return <Icon iconName='location-arrow' style={style} />;
};

export default Arrow;
