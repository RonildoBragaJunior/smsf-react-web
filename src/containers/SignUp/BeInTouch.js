import React, {Component} from 'react';
import classes from './SignUp.module.css';
import squirrelThrilled from '../../assets/images/squirrel_thrilled.png';


class AcceptFees extends Component {

    render () {
        return (
            <div>
                <div className={classes.AcceptFeesForm}>
                    <h1>Finished</h1>
                    <img src={squirrelThrilled} alt="Squirrel" />
                    <h1>We will be in touch shortly</h1>
                </div>
            </div>
        );
    }
}

export default AcceptFees;