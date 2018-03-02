import React from 'react'
import { connect } from 'react-redux'
import { switchIndicators } from '../actions'
import './SwitchIndicators.css'


let SwitchIndicators = ({ dispatch, layers }) => {
  let active_indicators = layers.filter(layer => layer.active === true);
  return (
    <div className="c-switch_indicators">
      <h3 className={"c-switch_indicators__heading c-switch_indicators__heading-" + active_indicators.length}>Indicators ({active_indicators.length})</h3>
      {
        layers.map((value, i) => (
          <div key={i}>
          <input className="c-switch_indicators__input" type = "checkbox" checked={value.active} id={"layer-toggle-" + i}/>
          <label className="c-switch_indicators__label" htmlFor={"layer-toggle-" + i} onClick={ ()=> dispatch(switchIndicators(i)) }>
            {value.displayName}
          </label>
          </div>
        ))
      }
      {
        active_indicators.map((value, i) => (
          <div key={i}>
            <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-switch_indicators__legend" id={ "switch_indicators-legend-" + i } alt="" />
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    layers: state.indicators.indicators
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

SwitchIndicators = connect(mapStateToProps, mapDispatchToProps)(SwitchIndicators)

export default SwitchIndicators
