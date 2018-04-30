import { PostList } from '../components/PostList/PostList';
import { connect } from 'react-redux';
import { fetchPostsHttp } from '../actions';

const mapStateToProps = state => ({
    postObj: state.postObj
})
  
const mapDispatchToProps = dispatch => ({
    fetchPostsHttp: () => dispatch(fetchPostsHttp())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)