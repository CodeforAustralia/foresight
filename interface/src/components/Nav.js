import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__logo"></div>
        <div className="nav__contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Nav;
