import * as actionTypes from '../actions/actionTypes';

const initialState = {
    signup_basic_information: null,
    signup_basic_information_success: null,
    signup_basic_information_response: null,
    signup_personal_information: null,
    signup_personal_information_success: null,
    signup_personal_information_response: null,
    signup_fund_information: null,
    signup_fund_information_success: null,
    signup_fund_information_response: null,
    signup_accept_fees: null,
    signup_accept_fees_success: null,
    signup_accept_fees_response: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SIGNUP_BI_START:
            return {
                ...state,
                signup_basic_information: action.signup_basic_information,
                loading: true,
                error: false
            }
        case actionTypes.SIGNUP_BI_SUCCESS:
            return {
                ...state,
                signup_basic_information_success: true,
                signup_basic_information_response: action.signup_basic_information_response,
                loading: false,
                error: false
            }
        case actionTypes.SIGNUP_BI_FAIL:
            return {
                ...state,
                signup_basic_information_success: false,
                signup_basic_information_response: action.signup_basic_information_response,
                loading: false,
                error: true
            }

        case actionTypes.SIGNUP_PI_START:
            return {
                ...state,
                signup_personal_information: action.signup_personal_information,
                loading: true,
                error: false
            }
        case actionTypes.SIGNUP_PI_SUCCESS:
            return {
                ...state,
                signup_personal_information_success: true,
                signup_personal_information_response: action.signup_personal_information_response,
                loading: false,
                error: false
            }
        case actionTypes.SIGNUP_PI_FAIL:
            return {
                ...state,
                signup_personal_information_success: false,
                signup_personal_information_response: action.signup_personal_information_response,
                loading: false,
                error: true
            }

        case actionTypes.SIGNUP_FI_START:
            return {
                ...state,
                signup_fund_information: action.signup_fund_information,
                loading: true,
                error: false
            }
        case actionTypes.SIGNUP_FI_SUCCESS:
            return {
                ...state,
                signup_fund_information_success: true,
                signup_fund_information_response: action.signup_fund_information_response,
                loading: false,
                error: false
            }
        case actionTypes.SIGNUP_FI_FAIL:
            return {
                ...state,
                signup_fund_information_success: false,
                signup_fund_information_response: action.signup_fund_information_response,
                loading: false,
                error: true
            }

        case actionTypes.SIGNUP_AF_START:
            return {
                ...state,
                signup_accept_fees: action.signup_accept_fees,
                loading: true,
                error: false
            }
        case actionTypes.SIGNUP_AF_SUCCESS:
            return {
                ...state,
                signup_accept_fees_success: true,
                signup_accept_fees_response: action.signup_accept_fees_response,
                loading: false,
                error: false
            }
        case actionTypes.SIGNUP_AF_FAIL:
            return {
                ...state,
                signup_accept_fees_success: false,
                signup_accept_fees_response: action.signup_accept_fees_response,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;