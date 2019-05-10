import React, {Component} from 'react';
import classes from './SignUp.module.css';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class PersonalInformationController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tax_file_number: '',
            employer: '',
            occupation: '',
            annual_income: '',
            investment_strategies: '',
            smsf_name: '',
            sf_name: '',
            member_account_number: '',
            rollover: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    postDataHandler = () => {
        let data = {
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

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div className={classes.PersonalInformationForm}>
                    {errorMessage}
                    <h3>We are almost done</h3>

                    <div className="fieldset">
                        <label>Tax file number</label>
                        <input
                            key="tax_file_number"
                            name="tax_file_number"
                            value={this.state.tax_file_number}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Employer</label> 
                        <input
                            key="employer"
                            name="employer"
                            value={this.state.employer}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Occupation</label>
                        <input
                            key="occupation"
                            name="occupation"
                            value={this.state.occupation}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Annual income</label>
                        <input
                            key="annual_income"
                            name="annual_income"
                            value={this.state.annual_income}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Investment strategies</label>
                        <input
                            key="investment_strategies"
                            name="investment_strategies"
                            value={this.state.investment_strategies}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>SMSF name</label>
                        <input
                            key="smsf_name"
                            name="smsf_name"
                            value={this.state.smsf_name}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Current super fund name</label>
                        <input
                            key="sf_name"
                            name="sf_name"
                            value={this.state.sf_name}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Member account number</label>
                        <input
                            key="member_account_number"
                            name="member_account_number"
                            value={this.state.member_account_number}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="fieldset">
                        <label>Rollover</label>
                        <input
                            key="rollover"
                            name="rollover"
                            value={this.state.rollover}
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