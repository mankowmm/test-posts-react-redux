import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';
import './Loader.css';

export class Loader extends Component {
    render() {
        return <div className="Loader">
                <MoonLoader
                    color={'#123abc'}
                    loading={this.props.loading} 
                />
            </div>   
    }
}
