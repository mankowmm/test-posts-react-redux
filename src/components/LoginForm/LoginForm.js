import React from 'react';
import { Loader } from '../Loader/Loader'
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { AuthHelper ,PASSWORD_VALIDATION_MESSAGE, USERNAME_VALIDATION_MESSAGE } from '../../helpers/authHelper';
import './LoginForm.css';

export const LoginForm = ({authenticatedUserName, authenticating, errorLogin, errorUserName, errorPassword, authenticateUser }) => {

    console.log('error', errorLogin, errorUserName, errorPassword);

    

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
}