import React, {Component} from 'react';
import squirrelThrilled from '../../assets/images/squirrel_thrilled.png';

import {AcceptFessForm} from './SignUp.styles';
class AcceptFees extends Component {

    render () {
        return (
            <>
                <AcceptFessForm>
                    <h1>Finished</h1>
                    <img src={squirrelThrilled} alt="Squirrel" />
                    <h1>We will be in touch shortly</h1>
                </AcceptFessForm>
            </>
        );
    }
}

export default AcceptFees;