import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__logo"></div>
        {this.props.children}
      </div>
    );
  }
}

export default Nav;
