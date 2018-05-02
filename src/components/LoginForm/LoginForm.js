import React from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import './LoginForm.css';

export const LoginForm = ({ errorLogin, errorUserName, errorPassword, authenticateUser, onChange }) => {

    let userNameVal;
    let passwordVal;

    const onSubmit = e => {
        e.preventDefault();
        authenticateUser(userNameVal, passwordVal);
    }

    const renderForm = ()=> {
        return (
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="User Name" onChange={(e) => { userNameVal = e.target.value }} required />
                    <div id="usernamevalidation"></div>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => { passwordVal = e.target.value }} required />
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