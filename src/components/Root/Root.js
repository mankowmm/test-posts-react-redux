import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import PostListPage from '../../containers/PostListPage'
import PostDetailPage from '../../containers/PostDetailPage'
import LoginPage from '../../containers/LoginPage'
import Home from '../Home/Home';
import AppNavbar from '../Navbar/AppNavbar';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

const Root = ({ store, authenticatedUserName, isAuthenticated }) => {
    const requireAuth = () => {
      console.log('checking if isAuthenticated:', isAuthenticated);
    }

    return (
      <Provider store={store}>
        <Router>
            <div>
                <AppNavbar/>
                <Route exact path="/login" component={LoginPage} />
                <PrivateRoute exact path="/" component={Home} isAuthenticated={isAuthenticated} render/>
                <PrivateRoute path="/posts" component={PostListPage} isAuthenticated={isAuthenticated} onEnter={requireAuth}/>
                <PrivateRoute path="/post/:id" component={PostDetailPage} isAuthenticated={isAuthenticated} onEnter={requireAuth}/>
            </div>
        </Router>
      </Provider>
    )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.userAuthState.isAuthenticated,
  authenticatedUserName: state.userAuthState.authenticatedUserName,
});

export default connect(mapStateToProps)(Root);
