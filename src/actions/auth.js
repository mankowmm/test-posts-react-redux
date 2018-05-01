import { AUTHENTICATE, AUTHENTICATE_FAILURE, AUTHENTICATE_SUCCESS, AUTHENTICATE_VALIDATION_FAILURE } from '../constants'
import { AuthHelper, PASSWORD_VALIDATION_MESSAGE, USERNAME_VALIDATION_MESSAGE } from '../helpers/authHelper';

export const authenticate = () => {
    return {
        type: AUTHENTICATE
    }
};

export const authenticateSuccess = (username) => {
    return {
        type: AUTHENTICATE_SUCCESS,
        username
    }
};

export const authenticateFailure = (errorLogin) => {
    return {
        type: AUTHENTICATE_FAILURE,
        errorLogin
    }
};

export const authenticateValidationFailure = (errorUserName, errorPassword) => {
    return {
        type: AUTHENTICATE_VALIDATION_FAILURE,
        errorUserName,
        errorPassword
    }
};


//Async Action
export const authenticateUser = (username, password) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        //validate inputs first
        let errorUserName, errorPassword;

        const isUserNameCorrect = AuthHelper.isUserNameValid(username);
        const isPasswordCorrect = AuthHelper.isPasswordValid(password);
       
        if(!isUserNameCorrect) {
            errorUserName = new Error(USERNAME_VALIDATION_MESSAGE)
        }
        if(!isPasswordCorrect) {
            errorPassword = new Error(PASSWORD_VALIDATION_MESSAGE)
        }
        if(errorUserName || errorPassword) {
            dispatch(authenticateValidationFailure(errorUserName, errorPassword));
        } else {
            // Returns a promise
            dispatch(authenticate());
            //fake login
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('fakeUserName')
                }, 2000)
            })
            .then(response => {
                // Dispatch another action
                // to consume data
                dispatch(authenticateSuccess(response.data))
            })
            .catch(error => {
                dispatch(authenticateFailure(error));
                throw(error);
            });
        }
        
    };
};