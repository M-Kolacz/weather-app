import React from 'react';

import classes from './ScrollContainer.module.css';

const ScrollContainer = (props) => {
    return <div className={classes.scroll}>{props.children}</div>;
};

export default ScrollContainer;
