import { FILTER_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS } from '../constants';

export const postObj = (state = {posts: [], loading: false}, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                loading: true,
                posts: []
            };
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.posts
            };    
        case FILTER_POSTS:
            let newPostsList = [];
            if(!action.searchText) {
                newPostsList = state.posts;
            }
            newPostsList = state.filter((post) => {
                const postTitle = post.title.toLowerCase();
                const postBody = post.body.toLowerCase();
                const actionSearchText = action.searchText.toLowerCase();
                //console.log(`check if ${postTitle} contains ${actionSearchText}:`);
                if(postTitle.includes(actionSearchText) || postBody.includes(actionSearchText)) {
                    return true;
                }
                return false;
            })
            return {
                loading: false,
                posts: newPostsList
            };
        default:
            return state;
    }
}