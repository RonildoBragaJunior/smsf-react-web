import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Member from '../../components/SMSFMember/SMSFMember';
import SMSFMemberDetails from './Details/SMSFMemberDetails'
import NewMember from './NewSMSFMember'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'
import Input from '../../components/UI/Input/Input';
import classes from './SMSFMember.module.css';

class SMSFMember extends Component {

    componentDidMount(){
        if(!this.props.smsf_members)
            this.props.onFetchSmsfMembers(this.props.token);
    }

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

    render () {

        let smsfMembers = null;
        if(this.props.smsf_members != null){
            smsfMembers = this.props.smsf_members.map(member =>{
                return (
                    <Member key={member.id} member={member} clicked={() => this.props.onSelectedSmsfMember(member.id, this.props.token)} />
                );
            });
        }

        return (
            <Aux>
                <Spinner show={this.props.loading}/>

                <div className={classes.SmsfMember}>
                    <div>
                        <Input key='1' elementType='input'
                            elementConfig={ {type: 'text', placeholder: 'Search'} }
                            onblur={(event) => this.props.onSearchSmsfMembers(event.target.value, this.props.token)}/>
                    </div>
                    <div className={classes.SmsfMemberTable}>
                        <table className="table table-hover" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" className="text-left">First name</th>
                                    <th scope="col" className="text-left">Last name</th>
                                    <th scope="col" className="text-left">Email</th>
                                    <th scope="col">Mobile number</th>
                                    <th scope="col">Tax file number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {smsfMembers}
                            </tbody>
                        </table>
                    </div>
                    <button className={classes.OkButton} onClick={this.postDataHandler}>NEW</button>

                    <SMSFMemberDetails show={this.props.show_selected_smsf_member}/>
                    <NewMember />
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
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
        onFetchSmsfMembers: (token) => dispatch(actions.fetchSmsfMembers(token)),
        onSearchSmsfMembers: (event, token) => dispatch(actions.searchSmsfMembers(event, token)),
        onSelectedSmsfMember: (smsf_member_id, token) => dispatch(actions.selectSmsfMember(smsf_member_id, token))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SMSFMember);