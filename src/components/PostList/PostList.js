import React from 'react';
import './PostList.css';
import { Loader } from '../Loader/Loader'
import { PostListElement } from './PostListElement';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

export const PostList = ({posts, loading, error}) => {

    if(error) {
        return (
            <ErrorMessage errorMessage={error.message}/>
        )
    } else if (loading) {
        return <Loader/>
    } else {
        var postListArray = posts.map((post, index) => {
            return <PostListElement key={index} post={post}/>;
        });
        return  (
            <div className="PostList">
                <div className="PostListItems">{ postListArray }</div>
            </div>
        )  
    }
}