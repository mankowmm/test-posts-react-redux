import { FILTER_POSTS } from '../constants'; 

const INITIAL_STATE = {
    searchText: ''
}
export const postsFilter = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FILTER_POSTS:
            return {
                searchText: action.searchText
            };
        default:
            return state;
    }
}