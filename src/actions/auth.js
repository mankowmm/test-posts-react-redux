import { AUTHENTICATE, AUTHENTICATE_FAILURE, AUTHENTICATE_SUCCESS } from '../constants'

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

export const authenticateFailure = (error) => {
    return {
        type: AUTHENTICATE_FAILURE,
        error
    }
};


//Async Action
export const authenticateUser = (username, password) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        dispatch(authenticate());
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
    };
};