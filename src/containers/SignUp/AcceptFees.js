import React, {Component} from 'react';
import classes from './SignUp.module.css';
import Spinner from '../../components/UI/Spinner/Spinner'
import certifySquirrelSuper from '../../assets/images/certify_squirrel_super.png';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';

class AcceptFees extends Component {

    postDataHandler = () => {
        const data = {
            accept_terms: 'Y',
        };

        this.props.onSignupAcceptFees(
            this.props.signup_basic_information_response.uuid,
            data
        );
    }

    componentDidUpdate(){
        if (this.props.signup_accept_fees_success)
            this.props.history.push({pathname: '/be_in_touch/'})
    }

    render () {
        let errorMessage = null;
        if (this.props.error){
            errorMessage = (
                <p>{this.props.signup_basic_information_response}</p>
            );
        }

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div className={classes.AcceptFeesForm}>
                    {errorMessage}
                    <h1>Your last step</h1>
                    <h3>Please read carefull</h3>
                    <p><img src={certifySquirrelSuper} alt="Squirrel" /></p>
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Agree</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        signup_accept_fees: state.signup.signup_accept_fees,
        signup_accept_fees_success: state.signup.signup_accept_fees_success,
        signup_accept_fees_response: state.signup.signup_accept_fees_response,
        signup_basic_information_response: state.signup.signup_basic_information_response,
        loading: state.signup.loading,
        error: state.signup.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignupAcceptFees: (uuid, accept_fees) => dispatch(actions.signupAcceptFees(uuid, accept_fees))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (AcceptFees);