import React, {Component} from 'react';
import axios from '../../axios-smsf';


class MemberDetails extends Component {

    state = {
        loadedMember: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedMember || (this.state.loadedMember && this.state.loadedMember.smsf_member_id !== this.props.id)) {
                console.log(this.props.id);
                axios.get('smsf/smsf_member/' + this.props.id + '/')
                    .then(response => {
                        this.setState({loadedMember: response.data});
                    });
            }
        }
    }

    deleteMemberHandler = () => {
        axios.delete('smsf/smsf_member/' + this.props.id + '/')
            .then(response => {
                console.log(response);
            });
    }

    render() {
        let member = <p style={{textAlign: 'center'}}>Please select a member!</p>;
        if (this.props.id) {
            member = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedMember) {
            member = (
                <div className="FullPost">
                    <h1>{this.state.loadedMember.smsf_member_id}</h1>
                    <p>{this.state.loadedMember.username}</p>
                    <div className="Edit">
                        <button onClick={this.deleteMemberHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return member;
    }
}

export default MemberDetails;