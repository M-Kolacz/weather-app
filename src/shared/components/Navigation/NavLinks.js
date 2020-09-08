import React from 'react';
import { NavLink } from 'react-router-dom';

import { TOMORROW, TODAY, DAYS10 } from '../../SSOT/paths';

import classes from './NavLinks.module.css';

const NavLinks = () => {
    return (
        <nav className='nav-links'>
            <ul className={classes.navLinks__list}>
                <li className={classes.navLinks__item}>
                    <NavLink to={TODAY} className={classes.navLinks__link}>
                        Today
                    </NavLink>
                </li>
                <li className={classes.navLinks__item}>
                    <NavLink to={TOMORROW} className={classes.navLinks__link}>
                        Tomorrow
                    </NavLink>
                </li>
                <li className={classes.navLinks__item}>
                    <NavLink to={DAYS10} className={classes.navLinks__link}>
                        10 days
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
