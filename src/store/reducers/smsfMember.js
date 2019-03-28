import * as actionTypes from '../actions/actionTypes';

const initialState = {
    smsf_members:[],
    selected_smsf_member: null,
    smsf_member_details: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SMSF_MEMBER_SEARCH:
            return{
                ...state,
                selected_smsf_member: action.selected_smsf_member
            };
        case actionTypes.SMSF_MEMBER_UPDATE:
            return{

            };
        case actionTypes.SMSF_MEMBER_CREATE:
            return {

            };
        case actionTypes.SELECT_SMSF_MEMBER:
            console.log('im here');
            return{
                ...state,
                selected_smsf_member: action.selected_smsf_member
            };
        default:
            return state;
    }

}

export default reducer;