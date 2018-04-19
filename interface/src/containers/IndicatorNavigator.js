import React from 'react'
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux'
import { updateIndicatorOrchestrator } from '../orchestrators'
import './Navigator.css'
import '../components/Collapsible.css';

let IndicatorNavigator = ({ dispatch, indicators, point, time }) => {
  return (
    <div className="c-navigator c-navigator--indicator">
      <Collapsible open={true} trigger={<h3 className="c-navigator__heading">Indicators</h3>}>
          {
            indicators.map((value, i) => (
              <div className={"c-navigator__option " + (value.available ? "is-available" : "is-unavailable")} key={i}>
                <input className="c-navigator__input" type="checkbox" checked={value.active} id={"layer-toggle-" + i} />
                <label
                  className="c-navigator__label"
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
