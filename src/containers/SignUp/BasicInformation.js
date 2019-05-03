import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './SignUp.module.css';
import {checkValidity} from "../../store/utility";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class BasicInformation extends Component {

    state = {
        controls: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                }
            },
            middle_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Middle Name'
                },
                value: '',
                validation: {
                    required: true,
                }
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
                }
            },
            mobile_number: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mobile Number'
                },
                value: '',
                validation: {
                    required: true,
                }
            },
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
                }
            },
            fund_balance: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Estimated Super Balance'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true,
                }
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
            first_name: this.state.controls.first_name.value,
            middle_name: this.state.controls.middle_name.value,
            last_name: this.state.controls.last_name.value,
            mobile_number: this.state.controls.mobile_number.value,
            sfunds: [{balance: this.state.controls.fund_balance.value}]
        };

        this.props.onSignupBasicInformation(data);
    }

    componentDidMount() {
        this.props.history.push({pathname: '/signup/'})
    }

    componentDidUpdate(){
        if (this.props.signup_basic_information_success)
            this.props.history.push({pathname: '/personal_information/'})
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
                <p>{this.props.signup_basic_information_response}</p>
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
        signup_basic_information: state.signup.signup_basic_information,
        signup_basic_information_success: state.signup.signup_basic_information_success,
        signup_basic_information_response: state.signup.signup_basic_information_response,
        loading: state.signup.loading,
        error: state.signup.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignupBasicInformation: (basic_information) => dispatch(actions.signupBasicInformation(basic_information))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformation);