import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Icon.module.css';

const Icon = (props) => {
    return (
        <div className={classes.icon} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.iconName} />
        </div>
    );
};

export default Icon;
