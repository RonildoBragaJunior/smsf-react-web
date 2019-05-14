import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationItemsUl from "./NavigationItems.styles"
import NavigationItem from "./NavigationItem/NavigationItem";


class NavigationItems extends Component {
  render() {
    return (
      <NavigationItemsUl>
        <NavigationItem link="/basic_information" exact>SignUp</NavigationItem>
        <NavigationItem link="/smsf">SMSF</NavigationItem>
        <NavigationItem link="/loans">Loans</NavigationItem>
        <NavigationItem link="/insurance">Insurance</NavigationItem>
        <NavigationItem link={this.props.token ? "/smsf_member/" : "/auth/"}>Login</NavigationItem>
      </NavigationItemsUl>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(NavigationItems);
