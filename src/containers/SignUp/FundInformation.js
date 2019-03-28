import React, {Component} from 'react';
import axios from '../../axios-smsf';
import Input from '../../components/UI/Input/Input';
import classes from './SignUp.module.css';

class PersonalInformationController extends Component {

    state = {
        controls:{
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
            },
            sf_name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Super fund name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            member_account_number:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Member account number'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            rollover: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'P', displayValue: 'Partial roll over'},
                        {value: 'F', displayValue: 'Full roll over'},
                    ]
                },
                value: 'F',
                validation: {},
                valid: true
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
            tax_file_number: this.state.controls.tax_file_number.value,
            employer: this.state.controls.employer.value,
            occupation: this.state.controls.occupation.value,
            annual_income: this.state.controls.annual_income.value,
            smsfund: {
                name: this.state.controls.smsf_name.value,
                investment_strategies: [
                    {
                        name: this.state.controls.investment_strategies.value
                    }
                ]
            },
            sfunds: [{
                name: this.state.controls.sf_name.value,
                account_number: this.state.controls.member_account_number.value,
                rollover: this.state.controls.rollover.value,
            }]

        };

        axios.patch('smsf/signup/' + this.props.match.params.id + '/', data)
            .then(response => {
                this.props.history.push({pathname: '/accept_fees/'+ this.props.match.params.id +'/'})
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
                    <h3>We are almost done</h3>
                    {form}
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Next</button>
                </div>

            </div>

        );
    }
}

export default PersonalInformationController;