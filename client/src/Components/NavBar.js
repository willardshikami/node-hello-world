import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">RESOURCES</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Resources</NavItem>
            <NavItem eventKey={2} href="#">Add Resource</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
