import React from 'react';
import {connect} from 'react-redux';
import { filterPost } from '../../actions/postList';

export class PostListSearchClass extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleInputChange = () => {
        this.props.dispatch(filterPost(this.inputRef.current.value));
        //this.props.onSearch(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                Search here <input name="postsearch" type="text" ref={this.inputRef} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export const PostListSearch = connect()(PostListSearchClass)