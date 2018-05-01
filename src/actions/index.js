import Axios from 'axios';
import { FILTER_POSTS, FETCH_POSTS, POST_ENDPOINT, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants'

export const filterPost = (searchText) => {
    return {
        type: FILTER_POSTS,
        searchText
    }
}

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS
    }
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    }
};

export const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        posts: [],
        error
    }
};


//Async Action
export const fetchPostsHttp = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        dispatch(fetchPosts());
        return Axios.get(POST_ENDPOINT)
        .then(response => {
            // Dispatch another action
            // to consume data
            dispatch(fetchPostsSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchPostsFailure());
            throw(error);
        });
    };
};