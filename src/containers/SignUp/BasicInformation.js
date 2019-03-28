import React, {Component} from 'react';
import axios from '../../axios-smsf';
import Input from '../../components/UI/Input/Input';
import classes from './SignUp.module.css';

class BasicInformation extends Component {

    state = {
        controls:{
            first_name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            middle_name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Middle Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            last_name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            mobile_number:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mobile Number'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
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
                },
                valid: false,
                touched: false
            },
            fund_balance:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Estimated Super Balance'
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

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
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

        axios.post('smsf/signup/', data)
            .then(response => {
                this.props.history.push({pathname: '/personal_information/'+ response.data.uuid +'/'})
            })
            .catch(error => {
                console.log(error.response)
            });
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

        return (

            <div>
                <div className={classes.SignUpForm}>
                    <h3>Take your first step.</h3>
                    {form}
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Next</button>
                </div>

            </div>

        );
    }
}

export default BasicInformation;