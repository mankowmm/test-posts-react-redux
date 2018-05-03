import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { PostListButton } from './PostListButton';
import { MemoryRouter } from 'react-router-dom';

describe('PostListButton component test suite', ()=> {

    let elWrapper;
    let postMock;

    beforeEach(() => {
        postMock = {id: 1, title: 'POSTMOCK'};
    })
    
    it('should validate with snapshot', () => {
        const tree = renderer
          .create(<MemoryRouter><PostListButton post={postMock}/></MemoryRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });          

});