import React, {Component} from 'react';
import axios from '../../axios-smsf';
import Input from '../../components/UI/Input/Input';
import classes from './SignUp.module.css';

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

        axios.patch('smsf/signup/' + this.props.match.params.id + '/', data)
            .then(response => {
                this.props.history.push({pathname: '/fund_information/'+ this.props.match.params.id +'/'})
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
                <div className={classes.PersonalInformationForm}>
                    <h3>We will need a bit more</h3>
                    {form}
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Next</button>
                </div>

            </div>

        );
    }
}

export default PersonalInformationController;