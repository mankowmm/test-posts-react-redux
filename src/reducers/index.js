import { combineReducers } from 'redux'
import { postObj } from './posts';
import { postsFilter } from './postsFilter';

// Add the reducer to your store on the `routing` key
export default combineReducers({
    postObj,
    postsFilter
})