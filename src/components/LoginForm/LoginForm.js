import React from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import './LoginForm.css';

export const LoginForm = withRouter(({authenticatedUserName, isAuthenticated, authenticating, errorLogin, errorUserName, errorPassword, authenticateUser, history }) => {

    const renderForm = ()=> {

        return (
            <Form onSubmit={(e) => {
                    const userNameVal = e.target.username.value;
                    const passwordVal = e.target.password.value;
                    authenticateUser(userNameVal, passwordVal);
                    e.preventDefault();
                }}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="User Name" required />
                    <div id="usernamevalidation"></div>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" required />
                    <div id="passwordvalidation"></div>
                </FormGroup>
                <Button>Submit</Button>
            </Form> 
               
        )
    }
    
    let content = renderForm();
    const errorMessageUserName = errorUserName ? (
        <Alert color="danger">
            {errorUserName.message}
        </Alert>
      ) : null;

    const errorMessagePassword = errorPassword ? (
    <Alert color="danger">
        {errorPassword.message}
    </Alert>
    ) : null;  
    
    return (
        <div className="LoginForm">{content}<br/>{errorMessageUserName}{errorMessagePassword}</div>
    )
})