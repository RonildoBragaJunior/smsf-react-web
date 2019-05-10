import React, { Component } from "react";
import classes from "./SignUp.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class BasicInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.props.onSignupBasicInformation(
      this.props.signup_details_response.uuid,
      data
    );
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
      <div>
        <Spinner show={this.props.loading} />
        <div className={classes.SignUpForm}>
          {errorMessage}
          <h3>First we need some basic information</h3>

          <div className="fieldset">
            <label>First name</label>
            <input
              key="first_name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Middle name</label>
            <input
              key="middle_name"
              name="middle_name"
              value={this.state.middle_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Last name</label>
            <input
              key="last_name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Mobile number</label>
            <input
              key="mobile_number"
              name="mobile_number"
              type="number"
              value={this.state.mobile_number}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="fieldset">
            <label>Fund Balance</label>
            <input
              key="fund_balance"
              name="fund_balance"
              value={this.state.fund_balance}
              onChange={this.handleInputChange}
            />
          </div>

          <button className={classes.OkButton} onClick={this.postDataHandler}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signup_details_success: state.signup.signup_details_success,
    signup_details_response: state.signup.signup_details_response,

    signup_basic_information: state.signup.signup_basic_information,
    signup_basic_information_success:
      state.signup.signup_basic_information_success,
    signup_basic_information_response:
      state.signup.signup_basic_information_response,

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
