import React, { Component } from 'react';
import './App.css';
import PostListPage from '../../containers/PostListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>
        App showing posts from http calls using react/redux
      </h1>
        <PostListPage/>
      </div>
    );
  }
}

export default App;
