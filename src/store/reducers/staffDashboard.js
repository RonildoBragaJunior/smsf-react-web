import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    smsf_members: null,
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

// ********************************* FETCH *********************************
        case actionTypes.SDFAM_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.SDFAM_SUCCESS:
            return {
                ...state,
                smsf_members: action.smsf_members,
                loading: false,
                error: false
            };
        case actionTypes.SDFAM_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;