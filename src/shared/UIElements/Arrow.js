import React from 'react';

import { LOCATION_ARROW } from '../SSOT/icons';

import Icon from './Icon';

const Arrow = ({ windDegree, customStyle }) => {
    const style = {
        ...customStyle,
        transform: `rotate(${windDegree - 45}deg)`,
        color: 'var(--arrow-color)',
    };
    return <Icon iconName={LOCATION_ARROW} style={style} />;
};

export default Arrow;
