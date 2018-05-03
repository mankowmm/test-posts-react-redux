import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/auth';
import { LoginForm } from '../components/LoginForm/LoginForm';

class LoginPage extends React.Component {

    componentDidUpdate() {
        //redirect to home/main when authentication success
        if(this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <LoginForm {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticatedUserName: state.userAuthState.authenticatedUserName,
        isAuthenticated: state.userAuthState.isAuthenticated,
        authenticating: state.userAuthState.authenticating,
        errorLogin: state.userAuthState.errorLogin,
        errorUserName: state.userAuthState.errorUserName,
        errorPassword: state.userAuthState.errorPassword
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser: (username, password) => {
            dispatch(authenticateUser(username, password))
        }
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)