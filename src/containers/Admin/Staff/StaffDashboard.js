import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

class CustomerDashboard extends Component {

    componentDidMount(){

    }

    render () {

        return (
            <div>
                <Spinner show={this.props.loading}/>
                <div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        smsf_members: state.staffDashboard.smsf_members,
        loading: state.staffDashboard.loading,
        error: state.staffDashboard.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSmsfMember: (token, smsf_member_id) => dispatch(actions.fetchAllMembers(token))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CustomerDashboard );