import React, { Component } from 'react';
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
import './Map.css';

let config = {};

config.params = {
  center: [-37.3848726037, 144.324611577],
  zoomControl: false,
  zoom: 13,
  maxZoom: 17,
  minZoom: 7,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};

config.tileLayer = {
  uri: 'http://maps.em.vic.gov.au/tms_cache/wm_mapscape_greyscale_ed5/{z}/{x}/{y}.png',
  params: {
    minZoom: 7,
    attribution: 'Vicmap Book by Spatial Vision Greyscale',
    id: '',
    accessToken: ''
  }
};

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      numEntrances: null
    };
    this._mapNode = null;
    this.updateMap = this.updateMap.bind(this);
  }

  componentDidMount() {
    // code to run just after the component "mounts" / DOM elements are created
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }


  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }


  updateMap(e) {
  }

  init(id) {
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, config.params);
    L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    // set our state to include the tile layer
    this.setState({ map, tileLayer });
  }

  render() {
    return (
      <div id="mapUI">
        <div ref={(node) => this._mapNode = node} id="map" />
      </div>
    );
  }
}

export default Map;
