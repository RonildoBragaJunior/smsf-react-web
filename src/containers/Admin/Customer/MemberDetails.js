import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {OkButton} from '../../SignUp/SignUp.styles';


class MemberDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            middle_name: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidMount(){
        if(this.props.smsf_member_details) {
            this.setState({
                first_name: this.props.smsf_member_details.first_name,
                last_name: this.props.smsf_member_details.last_name,
                middle_name: this.props.smsf_member_details.middle_name,
            });
        }
    }

    postDataHandler = () => {
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            middle_name: this.state.middle_name
        };
        this.props.onSaveMemberDetails(this.props.token, this.props.smsf_member_details.id, data);
    };

    render () {
        return (
            <div>

                <div>
                    <input
                        type="first_name"
                        key="first_name"
                        name="first_name"
                        maxLength="50"
                        value={this.state.first_name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="last_name"
                        key="last_name"
                        name="last_name"
                        maxLength="50"
                        value={this.state.last_name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="middle_name"
                        key="middle_name"
                        name="middle_name"
                        maxLength="50"
                        value={this.state.middle_name}
                        onChange={this.handleInputChange}
                    />
                    <OkButton onClick={this.postDataHandler}>Next</OkButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.customerDashboard.loading,
        error: state.customerDashboard.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveMemberDetails: (token, id, member_details) =>
            dispatch(actions.saveMemberDetails(token, id, member_details))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( MemberDetails );