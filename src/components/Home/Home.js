import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    render() {
        return (
          <div className="Home">
            <Jumbotron>
              <h1>Hello. This is example app created with ReactJS</h1>
              <p>
                This is simple application created with ReactJS, Redux and Bootstrap 4
              </p>
              <p className="lead">
                <Link className="btn btn-primary" to="/posts">See Posts</Link>
              </p>
            </Jumbotron>
          </div>
        );
                
    }
}

export default Home;