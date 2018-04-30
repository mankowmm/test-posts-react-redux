import React, { Component } from 'react';
import './App.css';
import PostListPage from '../../containers/PostListPage';
import { PostListSearch } from '../../components/PostListSearch/PostListSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>
        App showing posts from http calls using react/redux
      </h1>
        <PostListSearch/>
        <PostListPage/>
      </div>
    );
  }
}

export default App;
