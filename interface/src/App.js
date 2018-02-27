import React, { Component } from 'react';
import Map from './components/Map';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="full-width">
        <Nav />
        <Map />
      </div>
    );
  }
}

export default App;
