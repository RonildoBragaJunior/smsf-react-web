import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>SMSF</NavigationItem>
        <NavigationItem link="/orders">Loans</NavigationItem>
        <NavigationItem link="/clients">Insurance</NavigationItem>
        <NavigationItem link="/auth">Admin</NavigationItem>
    </ul>
);

export default navigationItems;