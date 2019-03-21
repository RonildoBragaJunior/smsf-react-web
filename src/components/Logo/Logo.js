import React from 'react';

import squirrelLogo from '../../assets/images/squirrel-logo.svg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={squirrelLogo} alt="Squirrel" />
    </div>
);

export default logo;