import { FETCH_POST_DETAIL, FETCH_POST_DETAIL_FAILURE, FETCH_POST_DETAIL_SUCCESS } from '../constants';

const INITIAL_STATE = {
    post: {}, 
    loading: false
}

export const postDetailObj = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POST_DETAIL:
            return Object.assign({}, state, {
                loading: true
            });
        case FETCH_POST_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                post: action.post
            });  
        default:
            return state;
    }
}