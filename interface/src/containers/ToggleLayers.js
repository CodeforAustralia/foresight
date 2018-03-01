import React from 'react'
import { connect } from 'react-redux'
import { toggleLayer } from '../actions'
import './ToggleLayers.css'

let ToggleLayers = ({ dispatch, layers }) => {
  let active_layers = layers.filter(layer => layer.active === true);
  return (
    <div className="c-toggle-layers">
      <h3 className={"c-toggle-layers__heading c-toggle-layers__heading-" + active_layers.length}>Boundaries ({active_layers.length})</h3>
      {
        layers.map((value, i) => (
          <div key={i}>
          <input className="c-toggle-layers__input" type = "checkbox" checked={value.active} id={"layer-toggle-" + i}/>
          <label className="c-toggle-layers__label" htmlFor={"layer-toggle-" + i} onClick={ ()=> dispatch(toggleLayer(i)) }>
            <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-toggle-layers__legend" id={ "toggle-layers-legend-" + i } alt="" />
            {value.displayName}
          </label>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    layers: state.layers.layers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

ToggleLayers = connect(mapStateToProps, mapDispatchToProps)(ToggleLayers)

export default ToggleLayers
