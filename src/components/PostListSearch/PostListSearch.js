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
    }

    render() {
        return (
            <div className="PostListSearch">
                <div class="form-group row PostListSearchInputGroup">
                    <label for="searchField" class="col-sm-5 col-form-label">Search here</label>
                    <div class="col-sm-7">
                        <input name="searchField" className="form-control" placeholder="Search in posts" type="text" ref={this.inputRef} onChange={this.handleInputChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export const PostListSearch = connect()(PostListSearchClass)