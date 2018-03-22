import React from 'react'
import { connect } from 'react-redux'
import './IndicatorLegend.css'
import Collapsible from 'react-collapsible';
import { geoserverBase } from '../config/environment.js'


let IndicatorLegend = ({ dispatch, indicators, layers }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  let active_layers = layers.filter(layer => layer.active === true);
  return (
    <Collapsible trigger={<h3 className="h-no-top-margin">Legend</h3>}>
      <div className="c-indicator-legend">
      <h4>Active boundary layers</h4>
      {
        active_layers.map((value, i) => (
          <div className="c-indicator-legend__layer-key" key={i}>
          {value.displayName}
          <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&transparent=true&layer=" + value.params.layers } className="c-layer-navigator__legend" id={ "layer-navigator-legend-" + i } alt="" />
          </div>
        ))
      }
      <hr className="c-horizontal-rule" />
      <h4>Active indicator</h4>
      {
        active_indicators.map((value, i) => (
          <div key={i}>
          <p>{ value.displayName }</p>
          <img src={ geoserverBase + value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-indicator-navigator__legend" id={ "indicator-navigator-legend-" + i } alt="" />
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
