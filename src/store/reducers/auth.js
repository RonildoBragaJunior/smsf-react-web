import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    email: null,
    user_details: null,
    loading: false,
    error: null,
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        email: action.email,
        error: null,
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, email: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const fetchUserDetailsStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
}

const fetchUserDetailsSuccess = ( state, action ) => {
    return updateObject( state, {
        user_details: action.user_details,
        loading: false,
        error: null,
    } );
}

const fetchUserDetailsFail = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionTypes.FUD_START: return fetchUserDetailsStart(state, action);
        case actionTypes.FUD_SUCCESS: return fetchUserDetailsSuccess(state, action);
        case actionTypes.FUD_FAIL: return fetchUserDetailsFail(state, action);
        default:
            return state;
    }
};

export default reducer;