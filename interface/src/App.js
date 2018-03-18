import React, { Component } from 'react';
import Nav from './components/Nav';
import LayerNavigator from './containers/LayerNavigator'
import IndicatorNavigator from './containers/IndicatorNavigator'
import IndicatorLegend from './containers/IndicatorLegend'
import MapLayers from './containers/MapLayers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="full-width nav__room">
        <Nav>
          <div className="c-floating-navigators">
            <div className="c-floating-navigators__navigator c-floating-navigators__navigator--left">
              <IndicatorLegend />
            </div>
            <div className="c-floating-navigators__navigator c-floating-navigators__navigator--right">
              <LayerNavigator />
            </div>
            <div className="c-floating-navigators__navigator c-floating-navigators__navigator--right">
              <IndicatorNavigator />
            </div>
          </div>
        </Nav>
        <MapLayers />
      </div>
    );
  }
}

export default App;
