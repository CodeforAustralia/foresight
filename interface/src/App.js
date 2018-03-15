import React, { Component } from 'react';
import Nav from './components/Nav';
import LayerNavigator from './containers/LayerNavigator'
import IndicatorNavigator from './containers/IndicatorNavigator'
import MapLayers from './containers/MapLayers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="full-width nav__room">
        <LayerNavigator />
        <IndicatorNavigator />
        <Nav />
        <MapLayers />
      </div>
    );
  }
}

export default App;
