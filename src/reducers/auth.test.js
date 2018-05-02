import { AUTHENTICATE, 
    AUTHENTICATE_FAILURE, 
    AUTHENTICATE_SUCCESS, 
    AUTHENTICATE_VALIDATION_FAILURE, 
    AUTHENTICATE_LOCAL_STORAGE_KEY, 
    AUTHENTICATE_LOGOUT_SUCCESS } from '../constants'
import { AuthHelper, PASSWORD_VALIDATION_MESSAGE, USERNAME_VALIDATION_MESSAGE } from '../helpers/authHelper';

import { userAuthState, INITIAL_STATE } from './auth';
describe('redux auth actions testing suite', ()=> {

    it('should return initial state if no action matching', ()=> {
        expect(userAuthState(INITIAL_STATE, {action: 'NO_MATCHING'})).toEqual(INITIAL_STATE);
    })
    it('should return proper state if action AUTHENTICATE', ()=> {
        expect(userAuthState(INITIAL_STATE, {type: AUTHENTICATE})).toEqual({
                authenticating: true, 
                errorUserName: null, 
                errorPassword: null,
                errorLogin: null,
                authenticatedUserName: null,
                isAuthenticated: false
            });
    })
    it('should return proper state if action AUTHENTICATE_FAILURE', ()=> {
        const mockedErrorLogin = new Error('mocked error login');
        expect(userAuthState(INITIAL_STATE, {type: AUTHENTICATE_FAILURE, errorLogin: mockedErrorLogin})).toEqual({
                errorLogin: mockedErrorLogin,
                authenticating: false, 
                errorUserName: null, 
                errorPassword: null,
                authenticatedUserName: null,
                isAuthenticated: false
            });
    })
    it('should return proper state if action AUTHENTICATE_SUCCESS', ()=> {
        const mockedAuthenticatedUserName = 'TESTUSERNAME';
        expect(userAuthState(INITIAL_STATE, {type: AUTHENTICATE_SUCCESS, username: mockedAuthenticatedUserName})).toEqual({
                errorLogin: null,
                authenticating: false, 
                errorUserName: null, 
                errorPassword: null,
                authenticatedUserName: mockedAuthenticatedUserName,
                isAuthenticated: true
            });
    })
    it('should return proper state if action AUTHENTICATE_VALIDATION_FAILURE', ()=> {
        const mockedErrorUsername = new Error('mocked username error');
        const mockedErrorPass = new Error('mocked password error');
        expect(userAuthState(INITIAL_STATE, {type: AUTHENTICATE_VALIDATION_FAILURE, errorUserName: mockedErrorUsername, errorPassword: mockedErrorPass})).toEqual({
                errorLogin: null,
                authenticating: false, 
                errorUserName: mockedErrorUsername, 
                errorPassword: mockedErrorPass,
                authenticatedUserName: null,
                isAuthenticated: false
            });
    })
    it('should return proper state if action AUTHENTICATE_LOGOUT_SUCCESS', ()=> {
        expect(userAuthState(INITIAL_STATE, {type: AUTHENTICATE_LOGOUT_SUCCESS})).toEqual({
                errorLogin: null,
                authenticating: false, 
                errorUserName: null, 
                errorPassword: null,
                authenticatedUserName: null,
                isAuthenticated: false
            });
    })

});