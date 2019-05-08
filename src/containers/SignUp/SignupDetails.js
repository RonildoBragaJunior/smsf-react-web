import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './SignUp.module.css';
import {checkValidity} from "../../store/utility";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class SignupDetails extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    postDataHandler = () => {
        const data = {
            username: this.state.controls.email.value,
            email: this.state.controls.email.value,
            password: this.state.controls.password.value

        };

        this.props.onSignupDetails(data);
    }

    componentDidMount() {
        this.props.history.push({pathname: '/signup_details/'})
    }

    componentDidUpdate(){
        if (this.props.signup_details_success)
            this.props.history.push({pathname: '/basic_information/'})
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));

        let errorMessage = null;
        if (this.props.error){
            errorMessage = (
                <p>{this.props.signup_response}</p>
            );
        }

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div className={classes.SignUpForm}>
                    {errorMessage}
                    <h3>Take your first step.</h3>
                    {form}
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