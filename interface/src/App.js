import React, { Component } from 'react';
import Nav from './components/Nav';
import ToggleLayers from './containers/ToggleLayers'
import SwitchIndicators from './containers/SwitchIndicators'
import MapLayers from './containers/MapLayers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="full-width nav__room">
        <ToggleLayers />
        <SwitchIndicators />
        <Nav />
        <MapLayers />
      </div>
    );
  }
}

export default App;
