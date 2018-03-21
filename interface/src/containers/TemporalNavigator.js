import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import 'moment-timezone';
import './TemporalNavigator.css'
import { setActiveTime, populatePointDetailsAsync } from '../actions'

let TemporalNavigator = ({ dispatch, time, indicators, point }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  return (
    <div className="c-temporal-navigator">
      <p>
        <Moment tz="Australia/Melbourne" format=" dddd DD/MM/YYYY HH:mm ">{ time.selected_time }</Moment>
      </p>
      <p>
      {
        active_indicators.map((value, i) => (
          value.available_times.map((t) => (
            <span key={t} className={"c-temporal-navigator__time c-temporal-navigator__time--is-" + ((Date.parse(t) === time.selected_time) ? "on" : "off")} onClick={ function(e){
              dispatch(setActiveTime(t))
              dispatch(populatePointDetailsAsync(point, active_indicators[0], t))
            } }>
              |
            </span>
          ))
        ))
      }
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    time: state.time,
    indicators: state.indicators.indicators,
    point: state.point
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

TemporalNavigator = connect(mapStateToProps, mapDispatchToProps)(TemporalNavigator)

export default TemporalNavigator
