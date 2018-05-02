import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { LoginForm } from './LoginForm';

import { errorUserNameValidation, errorPasswordValidation } from '../../actions/auth'

describe('LoginForm component test suite', ()=> {

    let elWrapper;
    
    it('should validate with snapshot', () => {
        const tree = renderer
          .create(<LoginForm/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render form with inputs and button', ()=> {
        elWrapper = mount(<LoginForm/>);
        expect(elWrapper.find('form').length).toBe(1);
        expect(elWrapper.find('input').length).toBe(2);
        expect(elWrapper.find('button').length).toBe(1);
    })

    it('should render form with alerts when errorUserName validation error passed', ()=> {
        elWrapper = mount(<LoginForm errorUserName={errorUserNameValidation}/>);
        const alerUserNameValidation = elWrapper.find('.alert-danger').first();
        expect(alerUserNameValidation.text()).toBe(errorUserNameValidation.message);
    })

    it('should render form with alerts when errorPassword validation error passed', ()=> {
        elWrapper = mount(<LoginForm errorPassword={errorPasswordValidation}/>);
        const alerUserNameValidation = elWrapper.find('.alert-danger').first();
        expect(alerUserNameValidation.text()).toBe(errorPasswordValidation.message);
    })

    it('should submit form and call authenticateUser passed as prop', ()=> {

        const USERNAME_MOCK = 'correctUserName';
        const PASSWORD_MOCK = 'Test12345'
        const authenticateUserMock = jest.fn();
        elWrapper = mount(<LoginForm authenticateUser={authenticateUserMock}/>);
        const form = elWrapper.find('form').first();
        const userNameInput = elWrapper.find('input#username').first();
        const passwordInput = elWrapper.find('input#password').first();
        
        userNameInput.simulate('change', { target: { value: USERNAME_MOCK } });
        passwordInput.simulate('change', { target: { value: PASSWORD_MOCK } });
        form.simulate('submit');
        expect(authenticateUserMock).toHaveBeenCalledTimes(1);
        expect(authenticateUserMock).toHaveBeenLastCalledWith(USERNAME_MOCK, PASSWORD_MOCK);
    })
   

});