import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('LoginForm component test suite', ()=> {

    let elWrapper;
    beforeEach(() => {
        
    })

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
   

});