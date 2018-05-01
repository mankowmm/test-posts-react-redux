import { combineReducers } from 'redux'
import { postObj } from './posts';
import { postsFilter } from './postsFilter';
import { postDetailObj } from './postDetail';

// Add the reducer to your store on the `routing` key
export default combineReducers({
    postObj,
    postsFilter,
    postDetailObj
})