import React from 'react';
//import './PostDetail.css';
import { Loader } from '../Loader/Loader'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import './PostDetail.css';

export const PostDetail = ({post, loading}) => {
    
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

    const renderLoader = () => {
        return <Loader/>    
    }
    const content = loading ? renderLoader() : renderCard();

    return (
        <div className="PostDetail">{content}</div>
    )
}