import React, {Component} from 'react';
import {connect} from 'react-redux'
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {

    render() {
        return (
            <ul className={classes.NavigationItems}>
                    <NavigationItem link="/signup" exact>SignUp</NavigationItem>
                    <NavigationItem link="/smsf">SMSF</NavigationItem>
                    <NavigationItem link="/loans">Loans</NavigationItem>
                    <NavigationItem link="/insurance">Insurance</NavigationItem>
                    <NavigationItem link={this.props.token ? "/smsf_member/" : "/auth/" }>Admin</NavigationItem>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    };
};

export default connect( mapStateToProps )( NavigationItems);