import React, {Component} from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import {connect} from 'react-redux';
import axios from '../../axios-smsf';
import classes from './SMSFMember.module.css';
import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/index';


class NewMember extends Component {
    state = {
        orderForm: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }

        },
        formIsValid: false,
        loading: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
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

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show_new_smsf_member !== this.props.show_new_smsf_member || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show_selected_smsf_member} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show_new_smsf_member ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show_new_smsf_member ? '1' : '0'
                    }}>
                    <div className="NewMember">
                        <label>username</label>
                        <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} />

                        <label>password</label>
                        <input type="text" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />

                        <button onClick={this.postDataHandler}>Add</button>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        smsf_members: state.smsfMember.smsf_members,
        search_parameters: state.smsfMember.search_parameters,
        selected_smsf_member: state.smsfMember.selected_smsf_member,
        show_selected_smsf_member: state.smsfMember.show_selected_smsf_member,
        show_new_smsf_member: state.smsfMember.show_new_smsf_member,
        loading: state.smsfMember.loading,
        error: state.smsfMember.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveSmsfMember: (selected_smsf_member) => dispatch(actions.saveSmsfMember(selected_smsf_member))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)( NewMember );