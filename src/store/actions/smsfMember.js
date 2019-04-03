import axios from '../../axios-smsf';

import * as actionTypes from './actionTypes';

// ********************************* FETCH *********************************
export const fetchSmsfMembersStart = () =>{
    return {
        type: actionTypes.FETCH_SMSF_MEMBER_START,
    }
}

export const fetchSmsfMembersSuccess = (response) =>{
    return {
        type: actionTypes.FETCH_SMSF_MEMBER_SUCCESS,
        smsf_members: response,
    }
}

export const fetchSmsfMembersFail = (response) =>{
    return {
        type: actionTypes.FETCH_SMSF_MEMBER_FAIL,
        error: response,
    }
}

export const fetchSmsfMembers = (token) => {
    return dispatch => {
        dispatch(fetchSmsfMembersStart());

        const config = {headers: {Authorization: 'Token ' + token,}}
        axios.get('smsf/smsf_member/', config)
            .then(response => {
                dispatch(fetchSmsfMembersSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchSmsfMembersFail(String(error)));
            });
    };
};

// ********************************* SEARCH *********************************
export const searchSmsfMembersStart = () =>{
    return {
        type: actionTypes.SEARCH_SMSF_MEMBER_START,
    }
}

export const searchSmsfMembersSuccess = (response) =>{
    return {
        type: actionTypes.SEARCH_SMSF_MEMBER_SUCCESS,
        smsf_members: response,
    }
}

export const searchSmsfMembersFail = (response) =>{
    return {
        type: actionTypes.SEARCH_SMSF_MEMBER_FAIL,
        error: response,
    }
}

export const searchSmsfMembers = (search_parameters, token) => {
    return dispatch => {
        dispatch(searchSmsfMembersStart());

        const config = {headers: {Authorization: 'Token ' + token,}}
        axios.get('smsf/smsf_member/?search=' + search_parameters, config)
            .then(response => {
                dispatch(searchSmsfMembersSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(searchSmsfMembersFail(String(error)));
            });
    };
};

// ********************************* SELECT *********************************
export const selectSmsfMemberStart = (smsf_member_id) => {
    return {
        type: actionTypes.SELECT_SMSF_MEMBER_START,
        selected_smsf_member: smsf_member_id
    };
};

export const selectSmsfMemberSuccess = (smsf_member_details) =>{
    return {
        type: actionTypes.SELECT_SMSF_MEMBER_SUCCESS,
        selected_smsf_member: smsf_member_details
    };
};

export const selectSmsfMemberFail = (error) =>{
    return {
        type: actionTypes.SELECT_SMSF_MEMBER_FAIL,
        error: error
    };
};

export const selectSmsfMember = (smsf_member_id, token) => {
    return dispatch => {
        dispatch(selectSmsfMemberStart(smsf_member_id));

        const config = {headers: {Authorization: 'Token ' + token,}}
        axios.get('smsf/smsf_member/' + smsf_member_id + '/', config)
            .then(response =>{
                dispatch(selectSmsfMemberSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response)
                dispatch(selectSmsfMemberFail(error));
            });
    };
};

// ********************************* SAVE *********************************
export const saveSmsfMemberStart = (smsf_member_id) => {
    return {
        type: actionTypes.SAVE_SMSF_MEMBER_START,
        selected_smsf_member: smsf_member_id
    };
};

export const saveSmsfMemberSuccess = (smsf_member_details) =>{
    return {
        type: actionTypes.SAVE_SMSF_MEMBER_SUCCESS,
        selected_smsf_member: smsf_member_details
    };
};

export const saveSmsfMemberFail = (error) =>{
    return {
        type: actionTypes.SAVE_SMSF_MEMBER_FAIL,
        error: error
    };
};

export const saveSmsfMember = (selected_smsf_member, token) => {
    return dispatch => {
        dispatch(saveSmsfMemberStart(selected_smsf_member));
        dispatch(saveSmsfMemberSuccess('OK'));

        //const config = {headers: {Authorization: 'Token ' + token,}}
        // axios.get('smsf/smsf_member/' + selected_smsf_member.id + '/')
        //     .then(response =>{
        //         dispatch(saveSmsfMemberSuccess(response.data));
        //     })
        //     .catch(error => {
        //         console.log(error.response)
        //         dispatch(saveSmsfMemberFail(error));
        //     });
    };
};