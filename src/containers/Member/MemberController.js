import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import Member from '../../components/Member/Member';
import MemberDetail from '../../components/Member/MemberDetail'
import NewMember from '../../components/Member/NewMember'

class MemberController extends Component {

    state = {
        members:[],
        selectedMemberId: null
    }


    componentDidMount(){
        axios.get('http://localhost:8000/smsf/smsf_member/')
            .then(response =>{
                this.setState({members: response.data.results});
               console.log(response);
            });
    }

    memberSelectedHandler = (id) =>{
        this.setState({selectedMemberId:id})
    }


    render () {
        const members = this.state.members.map(member =>{
            return <Member
                key={member.smsf_member_id}
                member={member}
                clicked={() => this.memberSelectedHandler(member.smsf_member_id)}
            />
        });

        return (
            <Aux>
                <div></div>
                <section>
                    {members}
                </section>
                <section>
                    <MemberDetail id={this.state.selectedMemberId} />
                </section>
                <section>
                    <NewMember />
                </section>
            </Aux>
        );
    }
}


export default MemberController;