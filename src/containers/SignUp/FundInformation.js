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

        this.props.onSignupFundInformation(
            this.props.signup_basic_information_response.uuid,
            data
        );
    }

    componentDidUpdate(){
        if (this.props.signup_fund_information_success)
            this.props.history.push({pathname: '/accept_fees/'})
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
                    <h3>We are almost done</h3>
                    {form}
                    <button className={classes.OkButton} onClick={this.postDataHandler}>Next</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        signup_fund_information: state.signup.signup_fund_information,
        signup_fund_information_success: state.signup.signup_fund_information_success,
        signup_fund_information_response: state.signup.signup_fund_information_response,
        signup_basic_information_response: state.signup.signup_basic_information_response,
        loading: state.signup.loading,
        error: state.signup.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignupFundInformation: (uuid, fund_information) => dispatch(actions.signupFundInformation(uuid, fund_information))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (PersonalInformationController);