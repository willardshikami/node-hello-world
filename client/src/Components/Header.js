import React, { Component } from 'react';
import './css/style.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">
       <h2 className="header-title">JAVASCRIPT RESOURCES</h2>
       <p className="header-paragraph">Below is a list of JavaScript (and a few HTML and CSS thrown in for good measure) resources, very loosely grouped by category and sub-category.</p>
      </div>
    );
  }
}

export default Header;
