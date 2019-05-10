import React, {Component} from 'react';
import classes from './SignUp.module.css';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class SignupDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {email: '', password: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    postDataHandler = () => {
        const data = {
            username: this.state.email,
            email: this.state.email,
            password: this.state.password
        };
        this.props.onSignupDetails(data);
    }

    componentDidUpdate() {
        if (this.props.signup_details_success)
            this.props.history.push({pathname: '/basic_information/'})
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.signup_details_response}</p>
            );
        }

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div className={classes.SignUpForm}>
                    {errorMessage}
                    <h3>Take your first step.</h3>

                    <div className="fieldset">
                        <label>Email*</label>
                        <input
                            key="email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className="fieldset">
                        <label>Password*</label>
                        <input
                            key="password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}/>
                    </div>

                    <button className={classes.OkButton} onClick={this.postDataHandler}>Next</button>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        signup_details: state.signup.signup_details,
        signup_details_success: state.signup.signup_details_success,
        signup_details_response: state.signup.signup_details_response,
        loading: state.signup.loading,
        error: state.signup.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignupDetails: (signup_details) => dispatch(actions.signupDetails(signup_details))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupDetails);