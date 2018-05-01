import React from 'react';
import './PostList.css';
import { Loader } from '../Loader/Loader'
import { PostListSearch } from '../PostListSearch/PostListSearch'
import PostListElement from './PostListElement';

export const PostList = ({posts, loading}) => {
    
    if (loading) {
        return <Loader/>
    } else {
        var postListArray = posts.map((post, index) => {
            return <PostListElement key={index} post={post}/>;
        });
        return  (
            <div>
                <PostListSearch/>
                <div className="PostList">{ postListArray }</div>
            </div>
        )  
    }
}