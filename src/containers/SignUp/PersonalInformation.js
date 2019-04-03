import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './SignUp.module.css';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'
import {checkValidity} from "../../store/utility";

class PersonalInformationController extends Component {

    state = {
        controls:{
            place_of_residence:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Place of residence'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'G', displayValue: 'Gender'},
                        {value: 'F', displayValue: 'Female'},
                        {value: 'M', displayValue: 'Male'}
                    ]
                },
                value: 'G',
                validation: {},
                valid: true
            },
            birth_date:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Birth date - YYYY-MM-DD'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            place_of_birth:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Place of birth'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            mothers_maiden_name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mother maiden name'
                },
                value: '',
                validation: {
                    required: true,
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
        let data = {
            place_of_residence: {
                street_name: this.state.controls.place_of_residence.value
            },
            gender: this.state.controls.gender.value,
            birth_date: this.state.controls.birth_date.value,
            place_of_birth: {
                street_name: this.state.controls.place_of_birth.value,
            },
            mothers_maiden_name: this.state.controls.mothers_maiden_name.value
        };

        this.props.onSignupPersonalInformation(
            this.props.signup_basic_information_response.uuid,
            data
        );
    }

    componentDidUpdate(){
        if (this.props.signup_personal_information_success)
            this.props.history.push({pathname: '/fund_information/'})
    }


    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        let errorMessage = null;
        if (this.props.error){
            errorMessage = (
                <p>{this.props.signup_basic_information_response}</p>
            );
        }

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div className={classes.PersonalInformationForm}>
                    {errorMessage}
                    <h3>We will need a bit more</h3>
                    {form}
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Next</button>
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        signup_personal_information: state.signup.signup_personal_information,
        signup_personal_information_success: state.signup.signup_personal_information_success,
        signup_personal_information_response: state.signup.signup_personal_information_response,
        signup_basic_information_response: state.signup.signup_basic_information_response,
        loading: state.signup.loading,
        error: state.signup.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignupPersonalInformation: (uuid, personal_information) => dispatch(actions.signupPersonalInformation(uuid, personal_information))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (PersonalInformationController);