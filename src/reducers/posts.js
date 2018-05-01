import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS } from '../constants';

const INITIAL_STATE = {
    posts: [], 
    loading: false
}

export const postsList = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return Object.assign({}, state, {
                loading: true,
                posts: []
            });
        case FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                posts: action.posts
            }); 
        case FETCH_POSTS_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                posts: [],
                error: action.error
            });     
        default:
            return state;
    }
}