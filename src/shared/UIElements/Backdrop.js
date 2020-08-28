import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    let style;
    if (props.zIndex) {
        style = { zIndex: 3 };
    }

    const content = (
        <div className={classes.backdrop} style={style}>
            {props.children}
        </div>
    );

    return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'));
};

export default Backdrop;
