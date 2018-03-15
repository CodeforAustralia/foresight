import React from 'react'
import { connect } from 'react-redux'
import { toggleLayer } from '../actions'
import './LayerNavigator.css'

let LayerNavigator = ({ dispatch, layers }) => {
  let active_layers = layers.filter(layer => layer.active === true);
  return (
    <div className="c-layer-navigator">
      <h3 className={"c-layer-navigator__heading c-layer-navigator__heading-" + active_layers.length}>Boundaries ({active_layers.length})</h3>
      {
        layers.map((value, i) => (
          <div key={i}>
          <input className="c-layer-navigator__input" type = "checkbox" checked={value.active} id={"layer-toggle-" + i}/>
          <label className="c-layer-navigator__label" htmlFor={"layer-toggle-" + i} onClick={ ()=> dispatch(toggleLayer(i)) }>
            <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&layer=" + value.params.layers } className="c-layer-navigator__legend" id={ "layer-navigator-legend-" + i } alt="" />
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

LayerNavigator = connect(mapStateToProps, mapDispatchToProps)(LayerNavigator)

export default LayerNavigator
