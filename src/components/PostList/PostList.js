import React from 'react';
import './PostList.css';
import { Loader } from '../Loader/Loader'

export const PostList = ({postObj}) => {
    console.log('posts:', postObj);

    const renderLoader = ()=> (
        <div>LOADING....</div>
    )

    const renderPostListRows = postObj.posts.map((post) => {
        return (
            <div key={post.id} className="post-list-row">
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        )
    })
    
    const ret = postObj.loading ? (
        <Loader/>
      ) : (
        <div className="post-list">
            <div className="post-list-header">
                <div>ID</div>
                <div>Title</div>
                <div>Body</div>
            </div>
            {renderPostListRows}
        </div>
      );

    return (
        ret
    )
}