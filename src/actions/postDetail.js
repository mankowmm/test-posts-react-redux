import Axios from 'axios';
import { FETCH_POST_DETAIL, FETCH_POST_DETAIL_FAILURE, FETCH_POST_DETAIL_SUCCESS, POST_ENDPOINT } from '../constants'

export const fetchPostDetail = () => {
    return {
        type: FETCH_POST_DETAIL
    }
};

export const fetchPostDetailSuccess = (post) => {
    return {
        type: FETCH_POST_DETAIL_SUCCESS,
        post
    }
};

export const fetchPostDetailFailure = (error) => {
    return {
        type: FETCH_POST_DETAIL_FAILURE,
        post: {},
        error
    }
};


//Async Action
export const fetchPostDetailsHttp = (postId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        dispatch(fetchPostDetail());
        return Axios.get(`${POST_ENDPOINT}/${postId}`)
            .then(response => {
                // Dispatch another action
                // to consume data
                dispatch(fetchPostDetailSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchPostDetailFailure());
                throw(error);
            });
    };
};