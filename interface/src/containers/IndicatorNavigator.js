import React from 'react'
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux'
import { updateIndicatorOrchestrator } from '../orchestrators'
import './IndicatorNavigator.css'
import '../components/Collapsible.css';

let IndicatorNavigator = ({ dispatch, indicators, point, time }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  return (
    <div className="c-indicator-navigator">
      <Collapsible open={true} trigger={<h3 className={"c-indicator-navigator__heading c-indicator-navigator__heading-" + active_indicators.length}>Indicators</h3>}>
          {
            indicators.map((value, i) => (
              <div className={"c-indicator-navigator__option " + (value.available ? "is-available" : "is-unavailable")} key={i}>
                <input className="c-indicator-navigator__input" type="checkbox" checked={value.active} id={"layer-toggle-" + i} />
                <label
                  className="c-indicator-navigator__label"
                  htmlFor={"layer-toggle-" + i}
                  onClick={ function(e){
                    if(value.available){
                      dispatch(updateIndicatorOrchestrator(i, indicators, time, point))
                    }
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
    point: state.point,
    time: state.time
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

IndicatorNavigator = connect(mapStateToProps, mapDispatchToProps)(IndicatorNavigator)

export default IndicatorNavigator
