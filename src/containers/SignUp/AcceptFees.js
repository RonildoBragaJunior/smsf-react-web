import React, {Component} from 'react';
import classes from './SignUp.module.css';
import Spinner from '../../components/UI/Spinner/Spinner'
import certifySquirrelSuper from '../../assets/images/certify_squirrel_super.png';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';

import styled from "styled-components";

const AcceptFessCheck = styled.form`
    display: flex;
    align-items: flex-start;

    label {
        text-align: left;
        margin-top: 2px;
    }

    input {
        width: 25px;
        height: 25px;
        min-width: 25px;
        min-height: 25px;
        margin-right: 10px;
    }

    a {
        color: #494645;
    }
`
class AcceptFees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accept: false
        };
    }

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
                    <h3>Please read carefully</h3>
                    <p><img src={certifySquirrelSuper} alt="Squirrel" /></p>
                    <AcceptFessCheck>
                        <input type="checkbox" value={this.state.accept} onChange={() => this.setState({accept: !this.state.accept})} className={classes.checkbox}/>
                        <label>By pressing the button agree, I&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/squirrelsuper-website/accept-the-fees/fee-acceptance.pdf">
                            accept the fees
                            </a> and agree to the&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/squirrelsuper-website/terms-conditions/terms-conditions.component.html">
                                Terms and Conditions</a> and <a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/squirrelsuper-website/privacy-policy/privacy-policy.component.html">Privacy Policy</a>
                            , which has been shown here.
                        </label>
                    </AcceptFessCheck>
                    <button className={classes.OkButton} onClick={this.postDataHandler} disabled={!this.state.accept}>Agree</button>
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