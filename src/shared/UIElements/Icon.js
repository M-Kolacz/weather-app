import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Icon.module.css';

const Icon = (props) => {
    const { onClick, iconName, style } = props;
    return (
        <div className={classes.icon} onClick={onClick} style={style}>
            <FontAwesomeIcon icon={iconName} />
        </div>
    );
};

export default Icon;
