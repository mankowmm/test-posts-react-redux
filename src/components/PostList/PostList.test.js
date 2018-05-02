import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { PostList } from './PostList';

describe('PostList component test suite', ()=> {

    let elWrapper;
    let postsMock;
    let loading;
    let error;

    beforeEach(() => {
        postsMock = [];
        loading = false;
        error = null;
    })
    
    it('should validate with snapshot', () => {
        const tree = renderer
          .create(<PostList loading={loading} posts={postsMock}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render PostList with Loader Component when loading is true passed', ()=> {
        postsMock = [];
        loading = true;
        elWrapper = shallow(<PostList loading={loading} posts={postsMock}/>);
        expect(elWrapper.find('Loader').length).toBe(1)
    })

    it('should render PostList with ErrorMessage component when error passed', ()=> {
        postsMock = [];
        loading = false;
        error = new Error('Network Error');
        elWrapper = shallow(<PostList loading={loading} posts={postsMock} error={error}/>);
        expect(elWrapper.find('ErrorMessage').length).toBe(1)
    })

    it('should render PostList with PostListElement components when passed', ()=> {
        postsMock = [
            {id: 1, title: 'TEST1'},
            {id: 2, title: 'TEST2'},
            {id: 3, title: 'TEST3'}
        ];
        loading = false;
        elWrapper = shallow(<PostList loading={loading} posts={postsMock}/>);
        expect(elWrapper.find('.PostList').length).toBe(1);
        expect(elWrapper.find('PostListElement').length).toBe(3)
    })
    

       

});