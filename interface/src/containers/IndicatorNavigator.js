import React from 'react'
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux'
import { switchIndicators, populatePointDetailsAsync } from '../actions'
import './IndicatorNavigator.css'
import '../components/Collapsible.css';

let IndicatorNavigator = ({ dispatch, indicators, point }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  return (
    <div className="c-indicator-navigator">
      <Collapsible trigger={<h3 className={"c-indicator-navigator__heading c-indicator-navigator__heading-" + active_indicators.length}>Indicators</h3>}>
          {
            indicators.map((value, i) => (
              <div className="c-indicator-navigator__option" key={i}>
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
      </Collapsible>
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
