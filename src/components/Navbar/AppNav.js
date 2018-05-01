import React,{ Component } from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';

class AppNav extends Component {

    render() {
        return  <Nav navbar>
                    <NavItem>
                        <NavLink tag={NavLinkRouter} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={NavLinkRouter} to="/posts">Posts</NavLink>
                    </NavItem>
                </Nav>
    }
};

export default AppNav;