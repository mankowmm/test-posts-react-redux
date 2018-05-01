import React, { Component } from 'react';
import PostListButton from './PostListButton';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './postListElement.css';

class PostListElement extends Component {
    render() {
        return (
            <div className="PostListElement">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <b>UserId</b>: {this.props.post.userId}
                        </CardTitle>
                        <br/>
                        <CardSubtitle>
                            <b>Title</b>: {this.props.post.title}
                        </CardSubtitle>
                        <br/>
                        <PostListButton post={this.props.post}>Button</PostListButton>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PostListElement;
