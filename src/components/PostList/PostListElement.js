import React, { Component } from 'react';
import { PostListButton } from './PostListButton';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './postListElement.css';

export class PostListElement extends Component {
    render() {
        return (
            <div className="PostListElement">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <span><b>UserId</b>: </span>
                            <span className="userIdTxt">{this.props.post.userId}</span>
                        </CardTitle>
                        <br/>
                        <CardSubtitle>
                            <span><b>Title</b>: </span>
                            <span className="titleTxt">{this.props.post.title}</span>
                        </CardSubtitle>
                        <br/>
                        <PostListButton post={this.props.post}/>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

