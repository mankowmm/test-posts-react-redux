import { combineReducers } from 'redux'
import { postObj } from './posts';
import { postsFilter } from './postsFilter';

export default combineReducers({
    postObj,
    postsFilter
})