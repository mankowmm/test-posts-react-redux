import { FETCH_POST_DETAIL, FETCH_POST_DETAIL_FAILURE, FETCH_POST_DETAIL_SUCCESS } from '../constants';

const INITIAL_STATE = {
    post: {}, 
    loading: false
}

export const postDetail = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POST_DETAIL:
            return Object.assign({}, state, {
                loading: true,
                error: null,
            });
        case FETCH_POST_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                post: action.post
            });  
        case FETCH_POST_DETAIL_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
                post: {}
            });      
        default:
            return state;
    }
}