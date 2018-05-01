import { AUTHENTICATE, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE, AUTHENTICATE_VALIDATION_FAILURE } from '../constants';

const INITIAL_STATE = {
    authenticatedUserName: null
}

export const userAuthState = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            return Object.assign({}, state, {
                authenticating: true,
                errorUserName: null,
                errorPassword: null,
            });
        case AUTHENTICATE_SUCCESS:
            return Object.assign({}, state, {
                authenticating: false,
                authenticatedUserName: action.username
            });  
        case AUTHENTICATE_FAILURE:
            return Object.assign({}, state, {
                authenticating: false,
                errorLogin: action.errorLogin,
                authenticatedUserName: null
            });    
        case AUTHENTICATE_VALIDATION_FAILURE:
            return Object.assign({}, state, {
                authenticating: false,
                errorUserName: action.errorUserName,
                errorPassword: action.errorPassword,
                authenticatedUserName: null
            });          
        default:
            return state;
    }
}