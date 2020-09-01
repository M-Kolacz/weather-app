import React from 'react';

import classes from './DetailIndicator.module.css';

const DetailIndicator = (props) => {
    const { indicator, value } = props;
    return (
        <div className={classes.details}>
            <span className={classes.details__indicator}>{indicator}</span>
            <span className={classes.details__indicator}>{value}</span>
        </div>
    );
};

export default DetailIndicator;
