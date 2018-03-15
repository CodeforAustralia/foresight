import React from 'react'
import { connect } from 'react-redux'
import { switchIndicators, populatePointDetailsAsync } from '../actions'
import './IndicatorNavigator.css'


let IndicatorNavigator = ({ dispatch, indicators, point }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  return (
    <div className="c-indicator-navigator">
      <h3 className={"c-indicator-navigator__heading c-indicator-navigator__heading-" + active_indicators.length}>Indicators ({active_indicators.length})</h3>
      {
        indicators.map((value, i) => (
          <div key={i}>
          <input className="c-indicator-navigator__input" type = "checkbox" checked={value.active} id={"layer-toggle-" + i}/>
          <label
            className="c-indicator-navigator__label"
            htmlFor={"layer-toggle-" + i}
            onClick={ function(e){
              dispatch(switchIndicators(i))
              dispatch(populatePointDetailsAsync(point, indicators[i]))
            } }
          >
            {value.displayName}
          </label>
          </div>
        ))
      }
      {
        active_indicators.map((value, i) => (
          <div key={i}>
            <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-indicator-navigator__legend" id={ "indicator-navigator-legend-" + i } alt="" />
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    indicators: state.indicators.indicators,
    point: state.point
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

IndicatorNavigator = connect(mapStateToProps, mapDispatchToProps)(IndicatorNavigator)

export default IndicatorNavigator
