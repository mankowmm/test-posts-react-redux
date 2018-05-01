import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostListPage from '../../containers/PostListPage'
import Home from '../Home/Home';
import AppNavbar from '../Navbar/AppNavbar';
import { configureStore } from '../../stores';
import { fetchPostsHttp } from '../../actions';

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
            <AppNavbar/>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={PostListPage} />
        </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root