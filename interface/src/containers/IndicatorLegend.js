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
    <Collapsible trigger={<h3 className="c-navigator__heading">Legend</h3>}>
      <div className="c-indicator-legend">
      {
        active_layers.map((value, i) => (
          <div className="c-indicator-legend__layer-key" key={i}>
          {value.displayName}
          <img className="c-indicator-legend__layer-image" src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&transparent=true&layer=" + value.params.layers } id={ "layer-navigator-legend-" + i } alt="" />
          </div>
        ))
      }
      {
        active_indicators.map((value, i) => (
          <div className="c-indicator-legend__indicator-key" key={i}>
          <h4 className="c-indicator-legend__heading">{ value.displayName } {value.units ? "(" + value.units.trim() + ")" : ""}</h4>
          <img src={ (value.base || geoserverBase) + value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-indicator-navigator__legend" id={ "indicator-navigator-legend-" + i } alt="" />
          <dl className="c-indicator-legend__metadata c-metadata-list">
            <dt className="c-metadata-list__title">Data updated:</dt>
            <dd className="c-metadata-list__definition"><Moment tz="Australia/Melbourne" format=" dddd DD/MM/YYYY HH:mm ">{ value.creationTime }</Moment></dd>
            <dt className="c-metadata-list__title">Data source:</dt>
            <dd className="c-metadata-list__definition">{ value.dataSource }</dd>
          </dl>
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
