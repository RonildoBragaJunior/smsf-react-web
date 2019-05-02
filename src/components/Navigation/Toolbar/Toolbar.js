import React from 'react';

import Toolbar from './Toolbar.styles';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <Toolbar>
        <div className= "limit-clearfix">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className='logo'>
                <Logo />
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </div>
    </Toolbar>
);

export default toolbar;