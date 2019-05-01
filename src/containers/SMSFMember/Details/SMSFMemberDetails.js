import React, {Component} from 'react';
import Backdrop from '../../../components/UI/Backdrop/Backdrop'
import {connect} from 'react-redux';

import Aux from '../../../hoc/Aux/Aux';
import * as actions from '../../../store/actions/index';
import classes from '../SMSFMember.module.css';
import Input from '../../../components/UI/Input/Input';
import {checkValidity} from "../../../store/utility";
import {basicInformation} from "./state"

class SMSFMemberDetails extends Component {

    state = {
        memberDetailsForm: basicInformation(),
        formIsValid: false,
        loading: false
    }

    postDataHandler = () => {
        const data = {
            // TODO: Get the data from the local state
        };
        this.props.onSaveSmsfMember(data);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.memberDetailsForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({memberDetailsForm: updatedOrderForm, formIsValid: formIsValid});
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show_selected_smsf_member !== this.props.show_selected_smsf_member || nextProps.children !== this.props.children;
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.memberDetailsForm) {
            formElementsArray.push({
                id: key,
                config: this.state.memberDetailsForm[key]
            });
        }
        let form = (
            <div>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={this.props.selected_smsf_member != null ? this.props.selected_smsf_member[formElement.id] : 'Nothing'}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </div>
        );



        return (
            <Aux>
                <Backdrop show={this.props.show_selected_smsf_member} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show_selected_smsf_member ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show_selected_smsf_member ? '1' : '0'
                    }}>
                    <div>
                        {form}
                    </div>
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