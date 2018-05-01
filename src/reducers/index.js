import { combineReducers } from 'redux'
import { postsList } from './posts';
import { postsFilter } from './postsFilter';
import { postDetail } from './postDetail';

// Add the reducer to your store on the `routing` key
export default combineReducers({
    postsList,
    postsFilter,
    postDetail
})