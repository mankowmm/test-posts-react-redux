import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { PostListElement } from './PostListElement';
import { MemoryRouter } from 'react-router-dom';

describe('PostListElement component test suite', ()=> {

    let elWrapper;
    let postMock;

    beforeEach(() => {
        postMock = {userId: 1, id: 1, title: 'POSTMOCK', body: 'POSTBODY'};
    })
    
    it('should validate with snapshot', () => {
        const tree = renderer
          .create(<MemoryRouter><PostListElement post={postMock}/></MemoryRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });      
    
    it('should contain PostListButton', ()=> {
        elWrapper = mount(<MemoryRouter><PostListElement post={postMock}/></MemoryRouter>).find(PostListElement);
        expect(elWrapper.find('PostListButton').length).toBe(1);
    })

    it('should render elements from post object', ()=> {
        elWrapper = mount(<MemoryRouter><PostListElement post={postMock}/></MemoryRouter>).find(PostListElement);
        expect(elWrapper.find('.userIdTxt').text()).toBe(postMock.userId.toString());
        expect(elWrapper.find('.titleTxt').text()).toBe(postMock.title); 
    })

});