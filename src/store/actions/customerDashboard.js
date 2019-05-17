import axios from '../../axios-smsf';

import * as actionTypes from './actionTypes';

// ********************************* FETCH *********************************
export const fetchSmsfMemberStart = () =>{
    return {
        type: actionTypes.CDFM_START,
    }
}

export const fetchSmsfMemberSuccess = (response) =>{
    return {
        type: actionTypes.CDFM_SUCCESS,
        smsf_member_details: response,
    }
}

export const fetchSmsfMemberFail = (response) =>{
    return {
        type: actionTypes.CDFM_FAIL,
        error: response,
    }
}

export const fetchSmsfMember = (token, smsf_member_id) => {
    return dispatch => {
        dispatch(fetchSmsfMemberStart());

        const config = {headers: {Authorization: 'Token ' + token,}}
        axios.get('smsf/smsf_member/' + smsf_member_id + '/', config)
            .then(response => {
                dispatch(fetchSmsfMemberSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(fetchSmsfMemberFail(error.response.data));
            });
    };
};

// ********************************* saveMemberDetails *********************************
export const saveMemberDetailsStart = () =>{
    return {
        type: actionTypes.CDSMD_START,
    }
}

export const saveMemberDetailsSuccess = (response) =>{
    return {
        type: actionTypes.CDSMD_SUCCESS,
        smsf_member_details_save_response: response,
    }
}

export const saveMemberDetailsFail = (response) =>{
    return {
        type: actionTypes.CDSMD_FAIL,
        error: response,
    }
}

export const saveMemberDetails = (token, id, member_details) => {
    return dispatch => {
        dispatch(saveMemberDetailsStart());

        const config = {headers: {Authorization: 'Token ' + token,}}
        axios.patch('smsf/smsf_member/' + id + '/', member_details, config)
            .then(response => {
                dispatch(saveMemberDetailsSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(saveMemberDetailsFail(error.response.data));
            });
    };
};