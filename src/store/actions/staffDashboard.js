import axios from '../../axios-smsf';

import * as actionTypes from './actionTypes';

// ********************************* FETCH ALL MEMBERS *********************************
export const fetchAllMembersStart = () =>{
    return {
        type: actionTypes.SDFAM_START,
    }
}

export const fetchAllMembersSuccess = (response) =>{
    return {
        type: actionTypes.SDFAM_SUCCESS,
        smsf_member_details: response,
    }
}

export const fetchAllMembersFail = (response) =>{
    return {
        type: actionTypes.SDFAM_FAIL,
        error: response,
    }
}

export const fetchAllMembers = (token) => {
    return dispatch => {
        dispatch(fetchAllMembersStart());

        const config = {headers: {Authorization: 'Token ' + token,}}
        axios.get('smsf/smsf_member/', config)
            .then(response => {
                dispatch(fetchAllMembersSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(fetchAllMembersFail(error.response.data));
            });
    };
};