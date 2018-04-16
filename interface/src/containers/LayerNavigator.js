import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { toggleLayer } from '../actions';
import './LayerNavigator.css';
import '../components/Collapsible.css';

let LayerNavigator = ({ dispatch, layers }) => {
  let active_layers = layers.filter(layer => layer.active === true);
  return (
    <div className="c-navigator c-layer-navigator">
      <Collapsible trigger={<h3 className={"c-layer-navigator__heading c-navigator__heading"}>Boundary Layers</h3>}>
        {
          layers.map((value, i) => (
            <div className="c-layer-navigator__option" key={i}>
              <input className="c-layer-navigator__input" type = "checkbox" checked={value.active} id={"layer-toggle-" + i}/>
              <label className="c-layer-navigator__label" htmlFor={"layer-toggle-" + i} onClick={ ()=> dispatch(toggleLayer(i)) }>
                {value.displayName}
                <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&transparent=true&layer=" + value.params.layers } className="c-layer-navigator__legend" id={ "layer-navigator-legend-" + i } alt="" />
              </label>
            </div>
          ))
        }
      </Collapsible>
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
