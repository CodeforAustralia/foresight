import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import 'moment-timezone';
import './TemporalNavigator.css'
import { setActiveTime, setDisplayTime, populatePointDetailsAsync } from '../actions'
import MessageBox from '../components/MessageBox'

let TemporalNavigator = ({ dispatch, time, indicators, point }) => {
  let active_indicators = indicators.filter(layer => layer.active === true);
  let messages = [];
  if(active_indicators.length === 0) {
    messages.push("Choose an indicator to view forecast data")
  } else if(time.display_time === undefined){
    messages.push(
      <div>
        <span>No forecast data for </span>
        <strong>{ active_indicators[0].displayName }</strong>
        <span> for </span>
        <strong><Moment tz="Australia/Melbourne" format=" dddd DD/MM/YYYY HH:mm ">{ time.selected_time }</Moment></strong>
      </div>
    )
  }
  return (
    <div>
      <div className="c-temporal-navigator__message-box">
        <MessageBox messages={ messages } />
      </div>
      <div className="c-temporal-navigator">
        <div className="c-temporal-navigator__time-range">
        {
          time.valid_times.map((value, i) => {
            let hour = new Date(value).getHours()
            let active = (value === time.selected_time)
            let displayed = (value === time.display_time)
            let display_time = undefined;
            let content = [];
            let container_class_names = [];
            if(hour === 0){
              let active_day_class_name = "";
              if(new Date(time.selected_time).getDate() === new Date(value).getDate()) {
                active_day_class_name = "c-time-range__day--active"
              }
              content.push(<p className={ "c-time-range__day " + active_day_class_name } key={"day-" + value}><Moment tz="Australia/Melbourne" format="dddd DD/MM">{ value }</Moment></p>)
              container_class_names.push("is-new-day")
            } else if(hour === 6 || hour === 12 || hour === 18) {
              container_class_names.push("is-highlight")
            }
            active_indicators.forEach((indicator, i)=> {
              let available_time_index = indicator.available_times.contained_points[value]
              if(available_time_index !== undefined){
                container_class_names.push("is-available")
                display_time = indicator.available_times.intervals[available_time_index].point_at
                let interval = indicator.available_times.intervals[available_time_index]
                if(value === interval.contained_periods[0]){
                  container_class_names.push("is-start")
                }
                if(value === interval.contained_periods[(interval.contained_periods.length - 1)]){
                  container_class_names.push("is-end")
                }
              }
            })

            if(active === true) {
              content.push(<span className="c-temporal-navigator__selector" key="temporal-navigator-selector">&nbsp;</span>)
              content.push(<p className="c-time-range__selected" key="temporal-navigator-selected-date"><Moment tz="Australia/Melbourne" format="HH:mm">{ value }</Moment></p>)
            }
            if(displayed === true) {
              container_class_names.push("is-displayed")
            }

            let container_class_string = ""
            container_class_names.forEach((className)=>{
              container_class_string = container_class_string + className + " "
            })

            return(
              <div className={"c-time-range__point " + container_class_string + (active ? "is-active" : "is-inactive")} key={ value } onClick={ function(e){
                dispatch(setActiveTime(value))
                dispatch(setDisplayTime(display_time))
                dispatch(populatePointDetailsAsync(point, active_indicators[0], display_time))
              } }>
                { content }
                <span className="c-time-range__hour">&nbsp;</span>
              </div>
            )
          })
        }
        </div>
      </div>
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
