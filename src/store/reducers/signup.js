import * as actionTypes from '../actions/actionTypes';

const initialState = {
    signup_details: null,
    signup_details_success: null,
    signup_details_response: null,
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
        case actionTypes.SBI_START:
            return {
                ...state,
                signup_basic_information: action.signup_basic_information,
                loading: true,
                error: false
            }
        case actionTypes.SBI_SUCCESS:
            return {
                ...state,
                signup_basic_information_success: true,
                signup_basic_information_response: action.signup_basic_information_response,
                loading: false,
                error: false
            }
        case actionTypes.SBI_FAIL:
            return {
                ...state,
                signup_basic_information_success: false,
                signup_basic_information_response: action.signup_basic_information_response,
                loading: false,
                error: true
            }

        case actionTypes.SPI_START:
            return {
                ...state,
                signup_personal_information: action.signup_personal_information,
                loading: true,
                error: false
            }
        case actionTypes.SPI_SUCCESS:
            return {
                ...state,
                signup_personal_information_success: true,
                signup_personal_information_response: action.signup_personal_information_response,
                loading: false,
                error: false
            }
        case actionTypes.SPI_FAIL:
            return {
                ...state,
                signup_personal_information_success: false,
                signup_personal_information_response: action.signup_personal_information_response,
                loading: false,
                error: true
            }

        case actionTypes.SFI_START:
            return {
                ...state,
                signup_fund_information: action.signup_fund_information,
                loading: true,
                error: false
            }
        case actionTypes.SFI_SUCCESS:
            return {
                ...state,
                signup_fund_information_success: true,
                signup_fund_information_response: action.signup_fund_information_response,
                loading: false,
                error: false
            }
        case actionTypes.SFI_FAIL:
            return {
                ...state,
                signup_fund_information_success: false,
                signup_fund_information_response: action.signup_fund_information_response,
                loading: false,
                error: true
            }

        case actionTypes.SAF_START:
            return {
                ...state,
                signup_accept_fees: action.signup_accept_fees,
                loading: true,
                error: false
            }
        case actionTypes.SAF_SUCCESS:
            return {
                ...state,
                signup_accept_fees_success: true,
                signup_accept_fees_response: action.signup_accept_fees_response,
                loading: false,
                error: false
            }
        case actionTypes.SAF_FAIL:
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