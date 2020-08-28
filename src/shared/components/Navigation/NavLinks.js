import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavLinks.module.css';

const NavLinks = () => {
    return (
        <nav className='nav-links'>
            <ul className={classes.navLinks__list}>
                <li className={classes.navLinks__item}>
                    <NavLink to='/today' className={classes.navLinks__link}>
                        Today
                    </NavLink>
                </li>
                <li className={classes.navLinks__item}>
                    <NavLink to='/tomorrow' className={classes.navLinks__link}>
                        Tomorrow
                    </NavLink>
                </li>
                <li className={classes.navLinks__item}>
                    <NavLink to='/10days' className={classes.navLinks__link}>
                        10 days
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
