import React, { Component } from 'react';
import App from '../css/App.css';
import ResourceList from '../containers/resources-list';
import {Navbar, NavItem, NavDropdown, Nav, NavbarBrand, MenuItem} from 'react-bootstrap';


class Main extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">RESOURCES</NavItem>
                
              </Nav>
            </Navbar.Collapse>
        </Navbar>

        <ResourceList/>
      </div>
    );
  }
}

export default Main;
