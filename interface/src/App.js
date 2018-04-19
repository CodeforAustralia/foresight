import React, { Component } from 'react';
import Nav from './components/Nav';
import LayerNavigator from './containers/LayerNavigator'
import IndicatorNavigator from './containers/IndicatorNavigator'
import TemporalNavigator from './containers/TemporalNavigator'
import IndicatorLegend from './containers/IndicatorLegend'
import MapLayers from './containers/MapLayers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="full-width nav__room">
        <Nav>
          <div className="c-nav__item">
            <LayerNavigator />
          </div>
          <div className="c-nav__item">
            <IndicatorNavigator />
          </div>
          <div className="c-nav__item">
            <div className="c-navigator">
              <IndicatorLegend />
            </div>
          </div>
        </Nav>
        <div className="c-bottom-navigator h-white-curved">
          <TemporalNavigator />
        </div>
        <MapLayers />
      </div>
    );
  }
}

export default App;
