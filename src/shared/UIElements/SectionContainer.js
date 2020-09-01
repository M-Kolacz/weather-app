import React from 'react';

import classes from './SectionContainer.module.css';

const SectionContainer = (props) => {
    return <section className={classes.container}>{props.children}</section>;
};

export default SectionContainer;
