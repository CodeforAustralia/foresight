import React from 'react'
import { connect } from 'react-redux'
import './IndicatorLegend.css'
import Collapsible from 'react-collapsible';
import { geoserverBase } from '../config/environment.js'
import Moment from 'react-moment'
import 'moment-timezone';

let IndicatorLegend = ({ dispatch, indicators, layers }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  let active_layers = layers.filter(layer => layer.active === true);
  return (
    <Collapsible trigger={<h3 className="h-no-top-margin">Legend</h3>}>
      <div className="c-indicator-legend">
      {
        active_layers.map((value, i) => (
          <div className="c-indicator-legend__layer-key" key={i}>
          {value.displayName}
          <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&transparent=true&layer=" + value.params.layers } className="c-layer-navigator__legend" id={ "layer-navigator-legend-" + i } alt="" />
          </div>
        ))
      }
      {
        active_indicators.map((value, i) => (
          <div className="c-indicator-legend__indicator-key" key={i}>
          <h4 className="h-no-top-margin">{ value.displayName } {value.units ? "(" + value.units.trim() + ")" : ""}</h4>
          <img src={ geoserverBase + value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-indicator-navigator__legend" id={ "indicator-navigator-legend-" + i } alt="" />
          <div class="c-indicator-legend__metadata">
            <p><strong>Data updated:</strong></p>
            <p><Moment tz="Australia/Melbourne" format=" dddd DD/MM/YYYY HH:mm ">{ value.creationTime }</Moment></p>
            <p><strong>Data source: </strong></p>
            <p>{ value.dataSource }</p>
          </div>
          </div>
        ))
      }
      </div>
    </Collapsible>
  )
}

const mapStateToProps = state => {
  return {
    indicators: state.indicators.indicators,
    layers: state.layers.layers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

IndicatorLegend = connect(mapStateToProps, mapDispatchToProps)(IndicatorLegend)

export default IndicatorLegend
