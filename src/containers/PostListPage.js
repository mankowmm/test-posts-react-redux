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

const getFilteredPosts = (postsObj, postsFilter) => {
    //console.log('postsObj:', postsObj);
    const posts = PostsHelper.filterPostsByTitleOrBody(postsObj.posts, postsFilter.searchText);
    return posts;
}

const mapStateToProps = state => ({
    loading: state.postObj.loading,
    posts: getFilteredPosts(state.postObj, state.postsFilter)
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