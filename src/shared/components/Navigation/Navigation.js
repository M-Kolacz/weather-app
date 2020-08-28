import React from 'react';

import Search from './Search';
import NavLinks from './NavLinks';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header className={classes.header}>
            <Search />
            <NavLinks />
        </header>
    );
};

export default Navigation;
