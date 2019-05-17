import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    user_details: null,
    smsf_member_details: null,
    smsf_member_details_save_response: null,
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

// ********************************* FETCH *********************************
        case actionTypes.CDFM_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.CDFM_SUCCESS:
            return {
                ...state,
                smsf_member_details: action.smsf_member_details,
                loading: false,
                error: false
            };
        case actionTypes.CDFM_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
// ********************************* saveMemberDetails *********************************
        case actionTypes.CDSMD_START:
            return{
                ...state,
                loading: true,
                error: false
            }
        case actionTypes.CDSMD_SUCCESS:
            return{
                ...state,
                smsf_member_details_save_response: action.smsf_member_details_save_response,
                loading:false,
                error:false
            }
        case actionTypes.CDSMD_FAIL:
            return{
                ...state,
                loading:false,
                error:true
            }
        default:
            return state;
    }
}

export default reducer;