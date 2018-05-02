import { AUTHENTICATE, 
    AUTHENTICATE_FAILURE, 
    AUTHENTICATE_SUCCESS, 
    AUTHENTICATE_VALIDATION_FAILURE, 
    AUTHENTICATE_LOCAL_STORAGE_KEY, 
    AUTHENTICATE_LOGOUT_SUCCESS } from '../constants'
import { AuthHelper, PASSWORD_VALIDATION_MESSAGE, USERNAME_VALIDATION_MESSAGE } from '../helpers/authHelper';

import { authenticate, 
        authenticateSuccess, 
        authenticateFailure, 
        authenticateValidationFailure, 
        authenticateLogoutSuccess,
        isUserAuthenticated,
        logoutUser,
        errorUserNotAuthenticated,
        authenticateUser,
        errorUserNameValidation,
        errorPasswordValidation,
        loginUser } from './auth';

describe('redux auth actions testing suite', ()=> {

    let dispatch;
    let getState;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();          
    })

    it('authenticate action should return AUTHENTICATE', ()=> {
        expect(authenticate()).toEqual({type: AUTHENTICATE});
    })

    it('authenticateSuccess action should return AUTHENTICATE_SUCCESS and username', ()=> {
        expect(authenticateSuccess('TESTUSERNAME')).toEqual({type: AUTHENTICATE_SUCCESS, username: 'TESTUSERNAME' });
    })

    it('authenticateFailure action should return AUTHENTICATE_FAILURE and errorLogin', ()=> {
        const errorLogin = new Error('TESTLOGINERROR');
        const authFailure = authenticateFailure(errorLogin);
        expect(authFailure).toEqual({type: AUTHENTICATE_FAILURE, errorLogin: errorLogin });
    })

    it('authenticateValidationFailure action should return AUTHENTICATE_VALIDATION_FAILURE and errorUserName and errorPassword', ()=> {
        const errorUserName = new Error('TESTUSERNAMEERROR');
        const errorPassword = new Error('TESTPASSNAMEERROR');
        const authFailure = authenticateValidationFailure(errorUserName, errorPassword);
        expect(authFailure).toEqual({type: AUTHENTICATE_VALIDATION_FAILURE, errorUserName: errorUserName, errorPassword: errorPassword  });
    })

    it('authenticateLogoutSuccess action should return AUTHENTICATE_LOGOUT_SUCCESS', ()=> {
        const authLogoutSuccess = authenticateLogoutSuccess();
        expect(authLogoutSuccess).toEqual({type: AUTHENTICATE_LOGOUT_SUCCESS });
    })

    it('isUserAuthenticated action should check localStorage item and dispatch AUTHENTICATE_SUCCESS if exist', ()=> {
        //mock localStorage key
        localStorage.setItem(AUTHENTICATE_LOCAL_STORAGE_KEY, 'TESTUSERNAME')
        isUserAuthenticated()(dispatch, getState);
        expect(localStorage.getItem).toHaveBeenLastCalledWith(AUTHENTICATE_LOCAL_STORAGE_KEY);
        //expect(localStorage.getItem).toHaveBeenCalledTimes(1);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE_SUCCESS, username: 'TESTUSERNAME'});
    })

    it('isUserAuthenticated action should check localStorage item and dispatch AUTHENTICATE_FAILURE if not exist', ()=> {
        //mock localStorage key
        localStorage.clear();
        isUserAuthenticated()(dispatch, getState);
        expect(localStorage.getItem).toHaveBeenLastCalledWith(AUTHENTICATE_LOCAL_STORAGE_KEY);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE_FAILURE, errorLogin: errorUserNotAuthenticated});
    })

    it('logoutUser action should remove localStorage item and dispatch authenticateLogoutSuccess', ()=> {
        const authLogoutSuccess = logoutUser()(dispatch, getState);
        expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE_LOGOUT_SUCCESS});
    })

    it('authenticateUser action should return validaiton error if username not valid', ()=> {
        authenticateUser('inv', 'ValidPassword12345')(dispatch, getState);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE_VALIDATION_FAILURE, errorUserName: errorUserNameValidation, errorPassword: undefined});
    })

    it('authenticateUser action should return validaiton error if password not valid', ()=> {
        authenticateUser('validusername', 'tooshort')(dispatch, getState);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE_VALIDATION_FAILURE, errorUserName: undefined, errorPassword: errorPasswordValidation});
    })

    it('authenticateUser action should return validaiton error if password or username not valid ', ()=> {
        authenticateUser('mm', 'tooshort')(dispatch, getState);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE_VALIDATION_FAILURE, errorUserName: errorUserNameValidation, errorPassword: errorPasswordValidation});
    })

    it('authenticateUser action should return AUTHENTICATE if input credentials are valid', ()=> {
        authenticateUser('correctusername', 'CorrectPassword12345')(dispatch, getState);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE});
    })

    it('authenticateUser action should return AUTHENTICATE if input credentials are valid', ()=> {
        authenticateUser('correctusername', 'CorrectPassword12345')(dispatch, getState);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATE});
    })

    it('loginUser action should return AUTHENTICATE_SUCCESS if login successfull', ()=> {
        const USERNAMEMOCK = 'correctusername';
        return loginUser(dispatch, USERNAMEMOCK , 'CorrectPassword12345').then(data => {
            expect(localStorage.setItem).toHaveBeenLastCalledWith(AUTHENTICATE_LOCAL_STORAGE_KEY, USERNAMEMOCK);
            expect(dispatch).toBeCalledWith({type: AUTHENTICATE_SUCCESS, username: USERNAMEMOCK});
        });
    })

})