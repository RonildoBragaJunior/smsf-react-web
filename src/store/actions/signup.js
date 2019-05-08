import axios from '../../axios-smsf';

import * as actionTypes from './actionTypes';
//***************** Signup details *****************

export const signupDetailsStart = (signup_details) =>{
    return {
        type: actionTypes.SIGNUP_DT_START,
        signup_details: signup_details,
    }
}

export const signupDetailsSuccess = (response) =>{
    return {
        type: actionTypes.SIGNUP_DT_SUCCESS,
        signup_details_response: response,
    }
}

export const signupDetailsFail = (response) =>{
    return {
        type: actionTypes.SIGNUP_DT_FAIL,
        signup_details_response: response,
    }
}

export const signupDetails = (signup_details) => {
    return dispatch => {
        dispatch(signupDetailsStart(signup_details));

        axios.post('smsf/signup/', signup_details)
            .then(response => {
                dispatch(signupDetailsSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(signupDetailsFail(String(error)));
            });
    };
};


//***************** Basic information signup *****************

export const signupBasicInformationStart = (basic_information) =>{
    return {
        type: actionTypes.SIGNUP_BI_START,
        signup_basic_information: basic_information,
    }
}

export const signupBasicInformationSuccess = (response) =>{
    return {
        type: actionTypes.SIGNUP_BI_SUCCESS,
        signup_basic_information_response: response,
    }
}

export const signupBasicInformationFail = (response) =>{
    return {
        type: actionTypes.SIGNUP_BI_FAIL,
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
                console.log(error);
                dispatch(signupBasicInformationFail(String(error)));
            });
    };
};

//***************** Personal information signup *****************

export const signupPersonalInformationStart = (personal_information) =>{
    return {
        type: actionTypes.SIGNUP_PI_START,
        signup_personal_information: personal_information,
    }
}

export const signupPersonalInformationSuccess = (response) =>{
    return {
        type: actionTypes.SIGNUP_PI_SUCCESS,
        signup_personal_information_response: response,
    }
}

export const signupPersonalInformationFail = (response) =>{
    return {
        type: actionTypes.SIGNUP_PI_FAIL,
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
                console.log(error);
                dispatch(signupPersonalInformationFail(String(error)));
            });
    };
};

//***************** Fund information signup *****************

export const signupFundInformationStart = (fund_information) =>{
    return {
        type: actionTypes.SIGNUP_FI_START,
        signup_fund_information: fund_information,
    }
}

export const signupFundInformationSuccess = (response) =>{
    return {
        type: actionTypes.SIGNUP_FI_SUCCESS,
        signup_fund_information_response: response,
    }
}

export const signupFundInformationFail = (response) =>{
    return {
        type: actionTypes.SIGNUP_FI_FAIL,
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
                console.log(error);
                dispatch(signupFundInformationFail(String(error)));
            });
    };
};

//***************** Accept the fees signup *****************

export const signupAcceptFeesStart = (personal_information) =>{
    return {
        type: actionTypes.SIGNUP_AF_START,
        signup_personal_information: personal_information,
    }
}

export const signupAcceptFeesSuccess = (response) =>{
    return {
        type: actionTypes.SIGNUP_AF_SUCCESS,
        signup_personal_information_response: response,
    }
}

export const signupAcceptFeesFail = (response) =>{
    return {
        type: actionTypes.SIGNUP_AF_FAIL,
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
                console.log(error);
                dispatch(signupAcceptFeesFail(String(error)));
            });
    };
};