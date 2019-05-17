import axios from '../../axios-smsf';

import * as actionTypes from './actionTypes';

// ************************************* Fetch user details  *************************************

export const fetchUserDetailsStart = () => {
    return {
        type: actionTypes.FUD_START
    };
};

export const fetchUserDetailsSuccess = (user_details) => {
    return {
        type: actionTypes.FUD_SUCCESS,
        user_details: user_details,
    };
};

export const fetchUserDetailsFail = (error) => {
    return {
        type: actionTypes.FUD_FAIL,
        error: error
    };
};

export const fetchUserDetails = (token) =>{
    return dispatch => {
        dispatch(fetchUserDetailsStart());

        const authData = {headers: {Authorization: 'Token ' + token,}}
        axios.get('smsf/token/'+token, authData)
            .then(response => {
                dispatch(fetchUserDetailsSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchUserDetailsFail(err.response.data));
            });
    };
}

// ************************************* AUTH *************************************

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        email: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('email');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            username: email,
            password: password,
        };

        axios.post('smsf/api-token-auth/', authData)
            .then(response => {
                dispatch(authSuccess(response.data.token, authData['username']));
                dispatch(fetchUserDetails(response.data.token))
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data));
            });
    };
};