import { AUTHENTICATE, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE, AUTHENTICATE_VALIDATION_FAILURE, AUTHENTICATE_LOGOUT_SUCCESS } from '../constants';

export const INITIAL_STATE = {
    isAuthenticated: false,
    authenticating: false,
    authenticatedUserName: null,
    errorUserName: null,
    errorPassword: null,
    errorLogin: null

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
                isAuthenticated: true,
                authenticatedUserName: action.username
            });  
        case AUTHENTICATE_FAILURE:
            return Object.assign({}, state, {
                authenticating: false,
                isAuthenticated: false,
                errorLogin: action.errorLogin,
                authenticatedUserName: null
            });    
        case AUTHENTICATE_VALIDATION_FAILURE:
            return Object.assign({}, state, {
                authenticating: false,
                isAuthenticated: false,
                errorUserName: action.errorUserName,
                errorPassword: action.errorPassword,
                authenticatedUserName: null
            }); 
        case AUTHENTICATE_LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                authenticating: false,
                isAuthenticated: false,
                authenticatedUserName: null
            });           
        default:
            return state;
    }
}