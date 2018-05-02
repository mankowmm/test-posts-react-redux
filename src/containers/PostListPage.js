import React from 'react';
import { PostList } from '../components/PostList/PostList';
import { connect } from 'react-redux';
import { PostsHelper } from '../helpers/postsHelper';
import { withRouter } from 'react-router'
import { fetchPostsHttp } from '../actions/postList';
import { logoutUser } from '../actions/auth';
import { UserBox } from '../components/UserBox/UserBox';
import { PostListSearch } from '../components/PostListSearch/PostListSearch'

import './PostListPage.css';

class PostListPage extends React.Component {

    componentDidMount() {
        this.props.fetchPostList();
    }
    render() {
        return (
            <div>
                <div className="PostListPageTopbar">
                    <UserBox {...this.props}/>
                    <PostListSearch/>
                </div>
                
                <PostList {...this.props}/>
            </div>
        )
    }
}

const getFilteredPosts = (inputPosts, postsFilter) => {
    const posts = PostsHelper.filterPostsByTitleOrBody(inputPosts, postsFilter.searchText);
    return posts;
}

const mapStateToProps = state => ({
    authenticatedUserName: state.userAuthState.authenticatedUserName,
    loading: state.postsList.loading,
    error: state.postsList.error,
    posts: getFilteredPosts(state.postsList.posts, state.postsFilter)
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostList: () => {
            dispatch(fetchPostsHttp())
        },
        logoutAction: () => {
            console.log('will logout user..');
            dispatch(logoutUser())
        }
    }
  }

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListPage))