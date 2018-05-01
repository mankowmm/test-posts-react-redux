import React from 'react';
import { PostList } from '../components/PostList/PostList';
import { connect } from 'react-redux';
import { PostsHelper } from '../helpers/postsHelper';
import { withRouter } from 'react-router'
import { fetchPostsHttp } from '../actions/postList';

class PostListPage extends React.Component {

    componentDidMount() {
        this.props.fetchPostList();
    }
    render() {
        return (
            <PostList {...this.props}/>
        )
    }
}

const getFilteredPosts = (inputPosts, postsFilter) => {
    const posts = PostsHelper.filterPostsByTitleOrBody(inputPosts, postsFilter.searchText);
    return posts;
}

const mapStateToProps = state => ({
    loading: state.postsList.loading,
    error: state.postsList.error,
    posts: getFilteredPosts(state.postsList.posts, state.postsFilter)
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostList: () => {
            dispatch(fetchPostsHttp())
        }
    }
  }

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListPage))