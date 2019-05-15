import React, {Component} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner'
import certifySquirrelSuper from '../../assets/images/certify_squirrel_super.png';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';

import {AcceptFessCheck, AcceptFessForm, OkButton} from './SignUp.styles';

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
                <AcceptFessForm>
                    {errorMessage}
                    <h1>Your last step</h1>
                    <h3>Please read carefully</h3>
                    <p><img src={certifySquirrelSuper} alt="Squirrel" /></p>
                    <AcceptFessCheck>
                        <input type="checkbox" value={this.state.accept} onChange={() => this.setState({accept: !this.state.accept})}/>
                        <label>By pressing the button agree, I&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/squirrelsuper-website/accept-the-fees/fee_acceptance_pricing_page.pdf">
                            accept the fees
                            </a> and agree to the&nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/squirrelsuper-website/terms-conditions/terms-conditions.component.html">
                                Terms and Conditions</a> and <a target="_blank" rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/squirrelsuper-website/privacy-policy/privacy-policy.component.html">Privacy Policy</a>
                            , which has been shown here.
                        </label>
                    </AcceptFessCheck>
                    <OkButton onClick={this.postDataHandler} disabled={!this.state.accept}>Agree</OkButton>
                </AcceptFessForm>
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