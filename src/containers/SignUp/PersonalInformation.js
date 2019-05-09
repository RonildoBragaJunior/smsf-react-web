import React, {Component} from 'react';
import classes from './SignUp.module.css';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'


class PersonalInformationController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            place_of_residence: '',
            gender: '',
            birth_date: '',
            place_of_birth: '',
            mothers_maiden_name: ''
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
            place_of_residence: {street_name: this.state.place_of_residence},
            gender: this.state.gender,
            birth_date: this.state.birth_date,
            place_of_birth: {street_name: this.state.place_of_birth,},
            mothers_maiden_name: this.state.mothers_maiden_name
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
                    <h3>Personal information</h3>

                    <div>
                        <input
                            key="place_of_residence"
                            name="place_of_residence"
                            value={this.state.place_of_residence}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input
                            key="gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input
                            key="birth_date"
                            name="birth_date"
                            value={this.state.birth_date}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input
                            key="place_of_birth"
                            name="place_of_birth"
                            value={this.state.place_of_birth}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input
                            key="mothers_maiden_name"
                            name="mothers_maiden_name"
                            value={this.state.mothers_maiden_name}
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