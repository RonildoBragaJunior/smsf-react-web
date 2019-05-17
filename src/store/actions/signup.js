import axios from '../../axios-smsf';

import * as actionTypes from './actionTypes';

//***************** Basic information signup *****************
export const signupBasicInformationStart = (basic_information) =>{
    return {
        type: actionTypes.SBI_START,
        signup_basic_information: basic_information,
    }
}

export const signupBasicInformationSuccess = (response) =>{
    return {
        type: actionTypes.SBI_SUCCESS,
        signup_basic_information_response: response,
    }
}

export const signupBasicInformationFail = (response) =>{
    return {
        type: actionTypes.SBI_FAIL,
        signup_basic_information_response: response,
    }
}

export const signupBasicInformation = (basic_information) => {
    return dispatch => {
        dispatch(signupBasicInformationStart(basic_information));

        axios.post('smsf/signup/', basic_information)
            .then(response => {
                dispatch(signupBasicInformationSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(signupBasicInformationFail(error.response.data));
            });
    };
};

//***************** Personal information signup *****************

export const signupPersonalInformationStart = (personal_information) =>{
    return {
        type: actionTypes.SPI_START,
        signup_personal_information: personal_information,
    }
}

export const signupPersonalInformationSuccess = (response) =>{
    return {
        type: actionTypes.SPI_SUCCESS,
        signup_personal_information_response: response,
    }
}

export const signupPersonalInformationFail = (response) =>{
    return {
        type: actionTypes.SPI_FAIL,
        signup_personal_information_response: response,
    }
}

export const signupPersonalInformation = (uuid, personal_information) => {
    return dispatch => {
        dispatch(signupPersonalInformationStart(personal_information));

        axios.patch('smsf/signup/' + uuid + '/', personal_information)
            .then(response => {
                dispatch(signupPersonalInformationSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(signupPersonalInformationFail(error.response.data));
            });
    };
};

//***************** Fund information signup *****************

export const signupFundInformationStart = (fund_information) =>{
    return {
        type: actionTypes.SFI_START,
        signup_fund_information: fund_information,
    }
}

export const signupFundInformationSuccess = (response) =>{
    return {
        type: actionTypes.SFI_SUCCESS,
        signup_fund_information_response: response,
    }
}

export const signupFundInformationFail = (response) =>{
    return {
        type: actionTypes.SFI_FAIL,
        signup_fund_information_response: response,
    }
}

export const signupFundInformation = (uuid, fund_information) => {
    return dispatch => {
        dispatch(signupFundInformationStart(fund_information));

        axios.patch('smsf/signup/' + uuid + '/', fund_information)
            .then(response => {
                dispatch(signupFundInformationSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(signupFundInformationFail(error.response.data));
            });
    };
};

//***************** Accept the fees signup *****************

export const signupAcceptFeesStart = (personal_information) =>{
    return {
        type: actionTypes.SAF_START,
        signup_personal_information: personal_information,
    }
}

export const signupAcceptFeesSuccess = (response) =>{
    return {
        type: actionTypes.SAF_SUCCESS,
        signup_personal_information_response: response,
    }
}

export const signupAcceptFeesFail = (response) =>{
    return {
        type: actionTypes.SAF_FAIL,
        signup_personal_information_response: response,
    }
}

export const signupAcceptFees = (uuid, accept_fees) => {
    return dispatch => {
        dispatch(signupAcceptFeesStart(accept_fees));

        axios.patch('smsf/signup/' + uuid + '/', accept_fees)
            .then(response => {
                dispatch(signupAcceptFeesSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(signupAcceptFeesFail(error.response.data));
            });
    };
};