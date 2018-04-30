import React from 'react';
import { filterPost } from '../../actions';
import { connect } from 'react-redux'

export class PostListSearchClass extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleInputChange = () => {
        //console.log('input changed - value:', this.inputRef.current.value);
        this.props.dispatch(filterPost(this.inputRef.current.value));
    }
    render() {
        return (
            <div>
                Search here <input name="postsearch" type="text" ref={this.inputRef} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export const PostListSearch = connect()(PostListSearchClass);