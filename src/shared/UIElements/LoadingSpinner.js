import React from 'react';

import Backdrop from './Backdrop';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <Backdrop zIndex>
            <div className={classes.skChase}>
                <div className={classes.skChaseDot}></div>
                <div className={classes.skChaseDot}></div>
                <div className={classes.skChaseDot}></div>
                <div className={classes.skChaseDot}></div>
                <div className={classes.skChaseDot}></div>
                <div className={classes.skChaseDot}></div>
            </div>
        </Backdrop>
    );
};

export default LoadingSpinner;
