import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import MemberDetails from './MemberDetails'

class CustomerDashboard extends Component {

    componentDidMount(){
        if(this.props.user_details){
            this.props.onFetchSmsfMember(this.props.token, this.props.user_details.smsf_member_id);
        }
    }

    render () {
        let smsfMemberDetails = null;
        if(this.props.smsf_member_details != null){
            smsfMemberDetails = <MemberDetails key={this.props.smsf_member_details.id} smsf_member_details={this.props.smsf_member_details}  />
        }

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div>
                    {smsfMemberDetails}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user_details: state.auth.user_details,
        smsf_member_details: state.customerDashboard.smsf_member_details,
        loading: state.customerDashboard.loading,
        error: state.customerDashboard.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSmsfMember: (token, smsf_member_id) => dispatch(actions.fetchSmsfMember(token, smsf_member_id))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CustomerDashboard );