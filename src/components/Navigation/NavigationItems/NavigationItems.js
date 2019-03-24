import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/signup" exact>SignUp</NavigationItem>
        <NavigationItem link="/smsf">SMSF</NavigationItem>
        <NavigationItem link="/loans">Loans</NavigationItem>
        <NavigationItem link="/insurance">Insurance</NavigationItem>
        <NavigationItem link="/auth">Admin</NavigationItem>
    </ul>
);

export default navigationItems;