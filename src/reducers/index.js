import { combineReducers } from 'redux'
import { postsList } from './posts';
import { postsFilter } from './postsFilter';
import { postDetail } from './postDetail';
import { userAuthState } from './auth';

// Add the reducer to your store on the `routing` key
export default combineReducers({
    userAuthState,
    postsList,
    postsFilter,
    postDetail
})