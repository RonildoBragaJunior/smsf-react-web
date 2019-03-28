import React, {Component} from 'react';
import axios from '../../axios-smsf';
import classes from './SignUp.module.css';

import certifySquirrelSuper from '../../assets/images/certify_squirrel_super.png';

class AcceptFees extends Component {

    postDataHandler = () => {
        const data = {
            accept_terms: 'Y',
        };

        axios.patch('smsf/signup/' + this.props.match.params.id + '/', data)
            .then(response => {
                this.props.history.push({pathname: '/be_in_touch/'+ response.data.id +'/'})
            })
            .catch(error => {
                console.log(error.response)
            });
    }


    render () {
        return (
            <div>
                <div className={classes.AcceptFeesForm}>
                    <h1>Your last step</h1>
                    <h3>Please read carefull</h3>
                    <p><img src={certifySquirrelSuper} alt="Squirrel" /></p>
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Agree</button>
                </div>
            </div>
        );
    }
}

export default AcceptFees;