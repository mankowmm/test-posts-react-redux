import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostListPage from '../../containers/PostListPage'
import PostDetailPage from '../../containers/PostDetailPage'
import LoginPage from '../../containers/LoginPage'
import Home from '../Home/Home';
import AppNavbar from '../Navbar/AppNavbar';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
            <AppNavbar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/posts" component={PostListPage} />
            <Route path="/post/:id" component={PostDetailPage} />
        </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root