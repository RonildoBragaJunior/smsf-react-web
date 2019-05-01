import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    smsf_members: null,
    search_parameters: null,
    selected_smsf_member: null,
    selected_smsf_member_form: null,
    show_selected_smsf_member: false,
    show_new_smsf_member: false,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
// ********************************* FETCH *********************************
        case actionTypes.FETCH_SMSF_MEMBER_START:
            return{
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.FETCH_SMSF_MEMBER_SUCCESS:
            return{
                ...state,
                smsf_members: action.smsf_members,
                loading: false,
                error: false
            };
        case actionTypes.FETCH_SMSF_MEMBER_FAIL:
            return{
                ...state,
                loading: false,
                error: true
            };
// ********************************* SEARCH *********************************
        case actionTypes.SEARCH_SMSF_MEMBER_START:
            return{
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.SEARCH_SMSF_MEMBER_SUCCESS:
            return{
                ...state,
                smsf_members: action.smsf_members,
                loading: false,
                error: false
            };
        case actionTypes.SEARCH_SMSF_MEMBER_FAIL:
            return{
                ...state,
                loading: false,
                error: true
            };
// ********************************* SELECT *********************************
        case actionTypes.SELECT_SMSF_MEMBER_START:
            return{
                ...state,
                selected_smsf_member: action.smsf_member_id,
                loading: true,
                error: false
            };
        case actionTypes.SELECT_SMSF_MEMBER_SUCCESS:
            return{
                ...state,
                selected_smsf_member: action.selected_smsf_member,
                show_selected_smsf_member: true,
                loading: false,
                error: false,
            };
        case actionTypes.SELECT_SMSF_MEMBER_FAIL:
            return{
                ...state,
                show_selected_smsf_member: false,
                loadind: false,
                error: action.error
            };
// ********************************* SAVE *********************************
        case actionTypes.SAVE_SMSF_MEMBER_START:
            return{
                ...state,
                selected_smsf_member: action.smsf_member_id,
                loading: true,
                error: false
            };
        case actionTypes.SAVE_SMSF_MEMBER_SUCCESS:
            return{
                ...state,
                selected_smsf_member: action.selected_smsf_member,
                show_selected_smsf_member: false,
                loading: false,
                error: false
            };
        case actionTypes.SAVE_SMSF_MEMBER_FAIL:
            return{
                ...state,
                show_selected_smsf_member: false,
                loadind: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default reducer;