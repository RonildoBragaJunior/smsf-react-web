import React, { Component } from 'react';
import axios from '../../axios-smsf';


class NewMember extends Component {
    state = {
        username: '',
        password: '',
    }

    postDataHandler = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post('smsf/create_smsf_member/', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className="NewMember">

                <label>username</label>
                <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} />

                <label>password</label>
                <input type="text" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />

                <button onClick={this.postDataHandler}>Add</button>
            </div>
        );
    }
}

export default NewMember;