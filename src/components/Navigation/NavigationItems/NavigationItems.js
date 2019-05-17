import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationItemsUl from "./NavigationItems.styles"
import NavigationItem from "./NavigationItem/NavigationItem";


class NavigationItems extends Component {
  render() {

      let login_url = null;

      if (this.props.user_details && this.props.user_details.staff_member_id)
          login_url = '/staff_dashboard/';
      else if (this.props.user_details && this.props.user_details.smsf_member_id)
          login_url = '/customer_dashboard/';
      else
          login_url = '/auth/'


    return (
      <NavigationItemsUl>
        <NavigationItem link="/basic_information" exact>SignUp</NavigationItem>
        <NavigationItem link="/smsf">SMSF</NavigationItem>
        <NavigationItem link="/loans">Loans</NavigationItem>
        <NavigationItem link="/insurance">Insurance</NavigationItem>
        <NavigationItem link={login_url}>Login</NavigationItem>
      </NavigationItemsUl>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user_details: state.auth.user_details
  };
};

export default connect(mapStateToProps)(NavigationItems);
