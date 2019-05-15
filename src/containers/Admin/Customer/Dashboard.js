import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Dashboard.module.css';
import * as actions from '../../../store/actions/index';


class Dashboard extends Component {

    state = {
        first_name: '',
        middle_name: '',
        last_name: '',
        mothers_maiden_name: '',
        gender: '',
        birth_date: '',
        mobile_number: '',
        place_of_residence: '',
        place_of_birth: '',
        annual_income: '',
        tax_file_number: '',
        occupation: '',
        employer: ''
    }

    componentDidMount(){
        if(!this.props.selected_smsf_member)
            this.props.onFetchSmsfMember(this.props.token, );
    }


    render () {


        return (
            <div className={classes.Auth}>
                <Spinner show={this.props.loading}/>

                <form onSubmit={this.submitHandler}>
                    <h1>I am here</h1>

                    <button className={classes.OkButton} onClick={this.postDataHandler}>ENTER</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        selected_smsf_member: state.smsfMember.selected_smsf_member,
        loading: state.smsfMember.loading,
        error: state.smsfMember.error

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );