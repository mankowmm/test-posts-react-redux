import { FETCH_POSTS_SUCCESS, FETCH_POSTS } from '../constants';

const INITIAL_STATE = {
    posts: [], 
    loading: false
}

export const postObj = (state = INITIAL_STATE, action) => {
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
        default:
            return state;
    }
}