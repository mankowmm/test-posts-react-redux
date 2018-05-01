import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { PostDetail } from '../components/PostDetail/PostDetail';
import { fetchPostDetailsHttp } from '../actions/postDetail';

class PostDetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.currentPostId = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchPostDetail(this.currentPostId);
    }
    render() {
        return (
            <PostDetail {...this.props}/>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.postDetail.loading,
    error: state.postDetail.error,
    post: state.postDetail.post
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (postId) => {
            dispatch(fetchPostDetailsHttp(postId))
        }
    }
  }

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailPage))