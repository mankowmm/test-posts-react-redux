import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class PostListButton extends Component {
    render() {
        return <Link className="btn btn-secondary" to={{pathname: `/post/${this.props.post.id}`}}>See detail</Link>
    }
}

