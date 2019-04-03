import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import {connect} from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/index';
import classes from './SMSFMember.module.css';

class SMSFMemberDetails extends Component {

    postDataHandler = () => {
        const data = {
            // username: this.state.controls.email.value,
            // email: this.state.controls.email.value,
            // first_name: this.state.controls.first_name.value,
            // middle_name: this.state.controls.middle_name.value,
            // last_name: this.state.controls.last_name.value,
            // mobile_number: this.state.controls.mobile_number.value,
            // sfunds: [{balance: this.state.controls.fund_balance.value}]
        };

        this.props.onSaveSmsfMember(data);
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show_selected_smsf_member !== this.props.show_selected_smsf_member || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show_selected_smsf_member} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show_selected_smsf_member ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show_selected_smsf_member ? '1' : '0'
                    }}>
                    I am here loading
                    <div>Inside of the div loading</div>
                    <button className={classes.OkButton} onClick={this.postDataHandler}>SAVE</button>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        smsf_members: state.smsfMember.smsf_members,
        search_parameters: state.smsfMember.search_parameters,
        selected_smsf_member: state.smsfMember.selected_smsf_member,
        show_selected_smsf_member: state.smsfMember.show_selected_smsf_member,
        loading: state.smsfMember.loading,
        error: state.smsfMember.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveSmsfMember: (selected_smsf_member) => dispatch(actions.saveSmsfMember(selected_smsf_member))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SMSFMemberDetails);