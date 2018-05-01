import React from 'react';
//import './PostDetail.css';
import { Loader } from '../Loader/Loader'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import './PostDetail.css';

export const PostDetail = ({post, loading, error}) => {
    
    const renderCard = ()=> {
            return <Card>
                <CardBody>
                    <CardTitle><b>Title</b>: {post.title}</CardTitle>
                    <CardSubtitle><b>UserId</b>:{post.userId}</CardSubtitle>
                    <CardText><b>Body</b>: {post.body}</CardText>
                    <Link className="btn btn-light" to="/posts">Go back to list</Link>
                </CardBody>
            </Card>
    }

    let content;
    if(loading) {
        content = <Loader/>
    } else if(error) {
        content = <ErrorMessage errorMessage={error.message}/>
    } else {
        content = renderCard();
    }
    
    return (
        <div className="PostDetail">{content}</div>
    )
}