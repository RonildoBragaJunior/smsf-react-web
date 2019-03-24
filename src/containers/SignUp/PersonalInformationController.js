import React, {Component} from 'react';
import axios from '../../axios-smsf';
import Input from '../../components/UI/Input/Input';
import classes from './SignUpController.module.css';

class PersonalInformationController extends Component {

    state = {
        controls:{
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
            postal_code: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postal Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            occupation: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'occupation', displayValue: 'Occupation'},
                        {value: 'computer programmer', displayValue: 'Computer Programmer'},
                        {value: 'chief executive officer', displayValue: 'Chief Executive Officer'},
                        {value: 'chief financial officer', displayValue: 'Chief Financial Officer'},
                        {value: 'secretary', displayValue: 'Secretary'},
                    ]
                },
                value: 'occupation',
                validation: {required: false},
                valid: true
            },
            employer:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Employer'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            annual_income:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Annual income'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true,
                },
                valid: false,
                touched: false
            },
            investment_strategies: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'investment strategy', displayValue: 'Investment strategy'},
                        {value: 'residential property', displayValue: 'Residential property'},
                        {value: 'australian shares', displayValue: 'Australian shares'},
                        {value: 'international shares', displayValue: 'International shares'},
                        {value: 'term deposits and fixed interest', displayValue: 'Term deposits and fixed interest'},
                        {value: 'cryptocurrencies', displayValue: 'Cryptocurrencies'},
                        {value: 'commercial property', displayValue: 'Commercial property'},
                        {value: 'collectibles', displayValue: 'Collectibles'},
                        {value: 'managed funds', displayValue: 'Managed funds'},
                        {value: 'cash', displayValue: 'Cash'},
                        {value: 'precious metal', displayValue: 'Precious metal'},
                        {value: 'other', displayValue: 'Other'},
                    ]
                },
                value: 'investment strategy',
                validation: {required: false},
                valid: true
            },

            tax_file_number:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Tax file number'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            smsf_name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'SMSF name'
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
            annual_income: this.state.controls.annual_income.value,
            mothers_maiden_name: this.state.controls.mothers_maiden_name.value,
            tax_file_number: this.state.controls.tax_file_number.value,
            occupation: this.state.controls.occupation.value,
            employer: this.state.controls.employer.value,
            gender: this.state.controls.gender.value,
            birth_date: this.state.controls.birth_date.value,
            smsfund: {
                name: this.state.controls.smsf_name.value,
                investment_strategies: [
                    {
                        name: this.state.controls.investment_strategies.value
                    }
                ]
            },
            place_of_residence: {
                street_name: this.state.controls.place_of_residence.value,
                postal_code: this.state.controls.postal_code.value
            },
            place_of_birth: {
                street_name: this.state.controls.place_of_birth.value,
            }
        };

        console.log(data);

        axios.patch('smsf/smsf_member/' + this.props.match.params.id + '/', data)
            .then(response => {
                console.log('ep it is working');
                console.log(response);
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
                    <button className={classes.SignUpFormButton} onClick={this.postDataHandler}>Next</button>
                </div>

            </div>

        );
    }
}

export default PersonalInformationController;