import React, { Component } from "react";
import classes from "./SignUp.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import styled from "styled-components"

const FirstStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

class BasicInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      first_name: "",
      middle_name: "",
      last_name: "",
      mobile_number: "",
      fund_balance: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  postDataHandler = () => {
    const data = {
      username: this.state.email,
      email: this.state.email,
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      mobile_number: this.state.mobile_number,
      sfunds: [{ balance: this.state.fund_balance }]
    };

    this.props.onSignupBasicInformation(data);
  };

  componentDidUpdate() {
    if (this.props.signup_basic_information_success)
      this.props.history.push({ pathname: "/personal_information/" });
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.signup_basic_information_response}</p>;
    }

    return (
      <FirstStep>
        <Spinner show={this.props.loading} />
        <content>
          <h1>Be in control of your superannuation</h1>
          <p>An SMSF puts you in the driving seat for how your super is invested. If you have an investment strategy in mind, speak to one of our team to see if an SMSF is right for you.</p>
          <label>With a Squirrel SMSF you will:</label>
          <ul>
            <li>Take control of your super</li>
            <li>Save thousands on management fees</li>
            <li>Invest your way</li>
          </ul>
        </content>   
        <div className={classes.SignUpForm}>
          {errorMessage}
          <h3>Take your first step</h3>

          <div className="fieldset">
            <label>Email</label>
            <input
                type="email"
                key="email"
                name="email"
                maxLength="50"
                value={this.state.email}
                onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>First name</label>
            <input
              key="first_name"
              name="first_name"
              value={this.state.first_name}
              maxLength="30"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Middle name</label>
            <input
              key="middle_name"
              name="middle_name"
              maxLength="100"
              value={this.state.middle_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Last name</label>
            <input
              key="last_name"
              name="last_name"
              maxLength="150"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Mobile number</label>
            <input
              key="mobile_number"
              name="mobile_number"
              maxLength="17"
              value={this.state.mobile_number}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Current super fund balance</label>
            <input
              key="fund_balance"
              name="fund_balance"
              type="number"
              min="1"
              max="900000"
              value={this.state.fund_balance}
              onChange={this.handleInputChange}
            />
          </div>
          <button className={classes.OkButton} onClick={this.postDataHandler}>
            Next
          </button>
        </div>
      </FirstStep>
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
    onSignupBasicInformation: (uuid, basic_information) =>
      dispatch(actions.signupBasicInformation(uuid, basic_information))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInformation);
