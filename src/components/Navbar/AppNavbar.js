import React from 'react';
import NavApp from './AppNav';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand} from 'reactstrap';

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand >Test React Application</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavApp/>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
