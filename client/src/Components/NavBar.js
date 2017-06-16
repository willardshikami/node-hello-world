import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './css/navbar.css';
const Link = require('react-router-dom').Link;
const NavLink = require('react-router-dom').NavLink;

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="link">RESOURCES</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <NavLink exact activeClassName="active" to="/">
              Resources
              </NavLink>
              </NavItem>
            <NavItem eventKey={2}>
              <NavLink activeClassName="active" to="/addresource">
              Add Resource
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
