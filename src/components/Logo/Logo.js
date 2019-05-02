import React from 'react';

import squirrelLogo from '../../assets/images/squirrel-logo.svg';
import Logo from './Logo.styles';

const logo = (props) => (
    <Logo src={squirrelLogo} alt="Squirrel" style={{height: props.height}}/>
);

export default logo;