import React from 'react';

import Backdrop from './Backdrop';

import { ReactComponent as ErrorSvg } from '../../svg/error/Tissue.svg';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <Backdrop>
            <div className='errorModal'>
                <ErrorSvg className={classes.errorModal__svg} />
                <h3 className={classes.errorModal__description}>Error! Type again!</h3>
            </div>
        </Backdrop>
    );
};

export default ErrorModal;
