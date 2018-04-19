import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { toggleLayer } from '../actions';
import './Navigator.css';
import '../components/Collapsible.css';

let LayerNavigator = ({ dispatch, layers }) => {
  return (
    <div className="c-navigator c-navigator--layer">
      <Collapsible trigger={<h3 className="c-navigator__heading">Boundary Layers</h3>}>
        {
          layers.map((value, i) => (
            <div className="c-navigator__option" key={i}>
              <input className="c-navigator__input" type = "checkbox" checked={value.active} id={"layer-toggle-" + i}/>
              <label className="c-navigator__label" htmlFor={"layer-toggle-" + i} onClick={ ()=> dispatch(toggleLayer(i)) }>
                {value.displayName}
                <img src={ value.source + "REQUEST=GetLegendGraphic&format=image/png&transparent=true&layer=" + value.params.layers } className="c-navigator__legend" id={ "layer-navigator-legend-" + i } alt="" />
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
