import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'

describe('LoginPage component test suite', ()=> {

    // create any initial state needed
    const initialState = {
        userAuthState: {
            authenticatedUserName: null,
            isAuthenticated: false,
            authenticating: false,
            errorLogin: null,
            errorUserName: null,
            errorPassword: null
        }
    }; 
    // here it is possible to pass in any middleware if needed into //configureStore
    const mockStore = configureStore();
    let store;
    let elWrapper;
    
    beforeEach(() => {
        //creates the store with any initial state or middleware needed  
        store = mockStore(initialState)
        elWrapper = shallow(<LoginPage store={store}/>)
        
    })

    it('should validate with snapshot', () => {
        const tree = renderer
          .create(<LoginPage store={store}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

});