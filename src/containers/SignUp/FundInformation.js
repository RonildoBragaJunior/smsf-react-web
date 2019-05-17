import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

import {PersonalInformationForm, OkButton} from './SignUp.styles';

class PersonalInformationController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tax_file_number: '',
            employer: '',
            occupation: '',
            annual_income: '',
            investment_strategies: 'residential property',
            smsf_name: '',
            sf_name: '',
            member_account_number: '',
            rollover: 'F',
            error: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    checkValidity() {
        if (this.state.tax_file_number.trim() === '') {
            this.setState({error: 'Please enter a tax file number'});
            return false;
        }
        if (this.state.employer.trim() === '') {
            this.setState({error: 'Please enter a employer'});
            return false;
        }
        if (this.state.occupation.trim() === '') {
            this.setState({error: 'Please enter a occupation'});
            return false;
        }
        if (this.state.annual_income.trim() === '') {
            this.setState({error: 'Please enter a annual income'});
            return false;
        }
        if (this.state.investment_strategies.trim() === '') {
            this.setState({error: 'Please enter a investment strategy'});
            return false;
        }
        if (this.state.smsf_name.trim() === '') {
            this.setState({error: 'Please enter a smsf name'});
            return false;
        }
        if (this.state.sf_name.trim() === '') {
            this.setState({error: 'Please enter the name of your current fund'});
            return false;
        }
        if (this.state.member_account_number.trim() === '') {
            this.setState({error: 'Please enter a member account number'});
            return false;
        }
        if (this.state.rollover.trim() === '') {
            this.setState({error: 'Please enter a rollover option'});
            return false;
        }

        return true;
    }

    postDataHandler = () => {
        if (this.checkValidity()) {
            const data = {
                tax_file_number: this.state.tax_file_number,
                employer: this.state.employer,
                occupation: this.state.occupation,
                annual_income: this.state.annual_income,
                smsfund: {
                    name: this.state.smsf_name,
                    investment_strategies: [{name: this.state.investment_strategies}]
                },
                sfunds: [{
                    name: this.state.sf_name,
                    account_number: this.state.member_account_number,
                    rollover: this.state.rollover,
                }]
            };

            this.props.onSignupFundInformation(
                this.props.signup_basic_information_response.uuid,
                data
            );
        }
    }

    componentDidUpdate(){
        if (this.props.signup_fund_information_success)
            this.props.history.push({pathname: '/accept_fees/'})
    }

    render () {
        let errorMessage = null;
        if (this.props.error){
            errorMessage = (
                <p>{this.props.signup_basic_information_response}</p>
            );
        }
        if (this.state.error) {
            errorMessage = <p>{this.state.error}</p>;
        }

        return (
            <>
                <Spinner show={this.props.loading}/>
                <PersonalInformationForm>
                    {errorMessage}
                    <h3>We are almost done</h3>

                    <div className="fieldset">
                        <label>Tax file number</label>
                        <input
                            key="tax_file_number"
                            name="tax_file_number"
                            maxLength="40"
                            value={this.state.tax_file_number}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Employer</label> 
                        <input
                            key="employer"
                            name="employer"
                            maxLength="20"
                            value={this.state.employer}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Occupation</label>
                        <input
                            key="occupation"
                            name="occupation"
                            maxLength="100"
                            value={this.state.occupation}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Annual income</label>
                        <input
                            key="annual_income"
                            name="annual_income"
                            type="number"
                            min="1"
                            max="900000"
                            value={this.state.annual_income}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Investment strategy</label>
                        <select
                            key="investment_strategies"
                            name="investment_strategies"
                            value={this.state.investment_strategies}
                            onChange={this.handleInputChange}>
                            <option value="residential property">Residential property</option>
                            <option value="australian shares">Australian shares</option>
                            <option value="international shares">International shares</option>
                            <option value="term deposits and fixed interest">Term deposits and fixed interest</option>
                            <option value="cryptocurrencies">Cryptocurrencies</option>
                            <option value="commercial property">Commercial property</option>
                            <option value="collectibles">Collectibles</option>
                            <option value="managed funds">Managed funds</option>
                            <option value="cash">Cash</option>
                            <option value="precious metal">Precious metal</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="fieldset">
                        <label>SMSF name</label>
                        <input
                            key="smsf_name"
                            name="smsf_name"
                            maxLength="20"
                            value={this.state.smsf_name}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Current super fund name</label>
                        <input
                            key="sf_name"
                            name="sf_name"
                            maxLength="20"
                            value={this.state.sf_name}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Member account number</label>
                        <input
                            key="member_account_number"
                            name="member_account_number"
                            maxLength="20"
                            value={this.state.member_account_number}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Rollover</label>
                        <select
                            key="rollover"
                            name="rollover"
                            value={this.state.rollover}
                            onChange={this.handleInputChange}>
                            <option value="F">Full Rollover: I no longer want to have Life & TPD insurance with current fund</option>
                            <option value="P">Partial Rollover: I want to keep existing Life & TPD insurance with current fund</option>
                        </select>
                    </div>

                    <OkButton onClick={this.postDataHandler}>Next</OkButton>
                </PersonalInformationForm>
            </>
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