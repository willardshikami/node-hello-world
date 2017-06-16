import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
       <h2 className="header-title">JAVASCRIPT RESOURCES</h2>
       <p className="header-paragraph">Below is a list of JavaScript (and a few HTML and CSS thrown in for good measure) resources, very loosely grouped by category and sub-category.</p>
       <form>
         <FormGroup className="input-box" bsSize="large">
            <FormControl type="text" placeholder="Type to filter" />
         </FormGroup>
       </form>
      </div>
    );
  }
}

export default Header;
