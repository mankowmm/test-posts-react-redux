import React from 'react';
import './PostList.css';
import { Loader } from '../Loader/Loader'
import { PostListSearch } from '../PostListSearch/PostListSearch'

export const PostList = ({posts, loading}) => {
    
    const renderPostListRows = posts.map((post) => {
        return (
            <div key={post.id} className="post-list-row">
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        )
    })
    
    const retDom = loading ? (
        <Loader/>
      ) : (
        <div className="post-list">
            <PostListSearch/>
            <div className="post-list-header">
                <div>ID</div>
                <div>Title</div>
                <div>Body</div>
            </div>
            {renderPostListRows}
        </div>
      );

    return (
        retDom
    )
}