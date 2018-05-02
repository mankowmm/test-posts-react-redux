import { AUTHENTICATE, 
        AUTHENTICATE_FAILURE, 
        AUTHENTICATE_SUCCESS, 
        AUTHENTICATE_VALIDATION_FAILURE, 
        AUTHENTICATE_LOCAL_STORAGE_KEY, 
        AUTHENTICATE_LOGOUT_SUCCESS } from '../constants'
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

export const authenticateLogoutSuccess = () => {
    return {
        type: AUTHENTICATE_LOGOUT_SUCCESS
    }
};

export const errorUserNotAuthenticated = new Error('User not authenticated');
export const isUserAuthenticated = () => {
    return (dispatch) => {
        const authenticatedUserName = localStorage.getItem(AUTHENTICATE_LOCAL_STORAGE_KEY);
        if(authenticatedUserName != null) {
            dispatch(authenticateSuccess(authenticatedUserName));
        } else {
            dispatch(authenticateFailure(errorUserNotAuthenticated));
        }
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem(AUTHENTICATE_LOCAL_STORAGE_KEY);
        dispatch(authenticateLogoutSuccess());
    }

}

export const errorUserNameValidation = new Error(USERNAME_VALIDATION_MESSAGE);
export const errorPasswordValidation = new Error(PASSWORD_VALIDATION_MESSAGE);
//Async Action

export const loginUser = (dispatch, username, password) => {
    return AuthHelper.fakeLogin(username, password)
        .then(response => {
            // Dispatch another action
            // to consume data
            localStorage.setItem(AUTHENTICATE_LOCAL_STORAGE_KEY, response);
            dispatch(authenticateSuccess(response))
        })
        .catch(error => {
            dispatch(authenticateFailure(error));
            throw(error);
        });
}
export const authenticateUser = (username, password) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        //validate inputs first
        let errorUserName, errorPassword;
        const isUserNameCorrect = AuthHelper.isUserNameValid(username);
        const isPasswordCorrect = AuthHelper.isPasswordValid(password);
        if(!isUserNameCorrect) {
            errorUserName = errorUserNameValidation
        }
        if(!isPasswordCorrect) {
            errorPassword = errorPasswordValidation
        }
        if(errorUserName || errorPassword) {
            dispatch(authenticateValidationFailure(errorUserName, errorPassword));
        } else {
            // Returns a promise
            dispatch(authenticate());
            //fake login
            loginUser(dispatch, username, password);
        }
        
    };
};