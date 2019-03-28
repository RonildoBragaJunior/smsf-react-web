import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-smsf';

import Aux from '../../hoc/Aux/Aux';
import Member from '../../components/SMSFMember/SMSFMember';
import MemberDetail from '../../components/SMSFMember/SMSFMemberDetail'
import NewMember from '../../components/SMSFMember/NewSMSFMember'
import * as actionTypes from '../../store/actions/actionTypes'


class SMSFMemberController extends Component {

    state = {
        smsf_members:[],
        selected_smsf_member: null,
        smsf_member_details: null
    }


    componentDidMount(){
        console.log('componentDidMount');
        axios.get('smsf/smsf_member/')
            .then(response =>{
                this.setState({smsf_members: response.data.results});
            })
            .catch(error => {
                console.log(error.response)
            });
    }


    render () {
        const members = this.state.smsf_members.map(member =>{
            return <Member
                key={member.id}
                member={member}
                clicked={() => this.props.onSelectedSmsfMember(member.id)}
            />
        });

        return (
            <Aux>
                <div></div>
                <section>
                    {members}
                </section>
                <section>
                    <p>1</p>
                    <MemberDetail id={this.state.selectedMemberId} />
                    <p>2</p>
                </section>
                <section>
                    <NewMember />
                </section>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        selected_smsf_member: state.selected_smsf_member
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectedSmsfMember: (selected_smsf_member) => dispatch({type: actionTypes.SELECT_SMSF_MEMBER, selected_smsf_member: selected_smsf_member})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SMSFMemberController);