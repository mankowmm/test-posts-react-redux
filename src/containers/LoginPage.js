import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { authenticateUser } from '../actions/auth';
import { LoginForm } from '../components/LoginForm/LoginForm';

class LoginPage extends React.Component {

    componentDidMount() {
        //this.props.fetchPostDetail(this.currentPostId);
    }
    render() {
        return (
            <LoginForm {...this.props}/>
        )
    }
}


const mapStateToProps = state => ({
    authenticatedUserName: state.userAuthState.authenticatedUserName,
    authenticating: state.userAuthState.authenticating,
    errorLogin: state.userAuthState.errorLogin,
    errorUserName: state.userAuthState.errorUserName,
    errorPassword: state.userAuthState.errorPassword,
    
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        authenticateUser: (username, password) => {
            console.log('will auth user with params:', username, password);
            dispatch(authenticateUser(username, password))
        }
    }
  }

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage))