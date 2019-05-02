import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavigationItem.styles";

const navigationItem = props => (
  <NavItem>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName="active"
    >
      {props.children}
    </NavLink>
  </NavItem>
);

export default navigationItem;
