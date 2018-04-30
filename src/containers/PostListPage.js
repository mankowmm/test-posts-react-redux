import { PostList } from '../components/PostList/PostList';
import { connect } from 'react-redux';
import { PostsHelper } from '../helpers/postsHelper';

const getFilteredPosts = (postsObj, postsFilter) => {
    const posts = PostsHelper.filterPostsByTitleOrBody(postsObj.posts, postsFilter.searchText);
    return posts;
}

const mapStateToProps = state => ({
    loading: state.postObj.loading,
    posts: getFilteredPosts(state.postObj, state.postsFilter)
})
  
const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)