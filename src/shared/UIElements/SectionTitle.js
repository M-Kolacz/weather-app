import React from 'react';

import classes from './SectionTitle.module.css';
import padding from '../../global/padding.module.css';

const SectionTitle = (props) => {
    return <h2 className={`${classes.title} ${padding.paddingLeft}`}>{props.children}</h2>;
};

export default SectionTitle;
