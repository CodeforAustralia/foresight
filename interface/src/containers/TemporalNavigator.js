import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import 'moment-timezone';
import ReactKeymaster from 'react-keymaster';

import './TemporalNavigator.css'

import { togglePlaying, stopPlaying, setTimer } from '../actions'
import { updateTimeOrchestrator } from '../orchestrators'

import MessageBox from '../components/MessageBox'


class TemporalNavigator extends React.Component {
  render() {
    let dispatch = this.props.dispatch
    let indicators = this.props.indicators
    let time = this.props.time
    let play = this.props.play


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
    if(active_indicators.length === 0) {
      return(
        <div>
          <div className="c-temporal-navigator__message-box">
            <MessageBox messages={ messages } />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="c-temporal-navigator__message-box">
            <MessageBox messages={ messages } />
          </div>
          <div className="c-temporal-navigator h-shadow-border">
            <div className="c-temporal-navigator__controls">
              { this.renderControls(dispatch, time, active_indicators[0], play) }
            </div>
            <div className="c-temporal-navigator__time-range">
              { this.renderTimeRange(dispatch, time, active_indicators) }
            </div>
          </div>
        </div>
      )
    }

  }

  renderTimeRange(dispatch, time, active_indicators) {
    return(
      <div className="c-time-range">
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
              dispatch(stopPlaying())
              dispatch(updateTimeOrchestrator(value, display_time))
            } }>
              { content }
              <span className="c-time-range__hour">&nbsp;</span>
            </div>
          )
        })
      }
      </div>
    )
  }

  renderControls(dispatch, time, active_indicator, play) {
    if(active_indicator === undefined) {
      return null
    } else {
      let next_time, previous_time, next_day_time, previous_day_time;
      let available_times = active_indicator.available_times.points;
      let display_time = time.display_time;
      let current_time_index = available_times.indexOf(display_time);

      let date = new Date(time.selected_time)
      next_day_time = new Date(date.setDate(date.getDate() + 1)).toISOString()
      date = new Date(time.selected_time)
      previous_day_time = new Date(date.setDate(date.getDate() - 1)).toISOString()

      if(current_time_index !== -1) {
        next_time = available_times[current_time_index + 1];
        previous_time = available_times[current_time_index - 1];
      } else {
        previous_time = null;
        next_time = null;
      }

      return(
        <div className="c-temporal-controls">
          { this.renderTick(dispatch, play, next_time) }
          <ReactKeymaster keyName="space" onKeyDown={
            function(e){
              dispatch(togglePlaying())
              return false
            }
          } />
          <ReactKeymaster keyName="left" onKeyDown={
            function(e){
              if(previous_time){
                dispatch(updateTimeOrchestrator(previous_time))
              }
              return false
            }
          } />
          <ReactKeymaster keyName="right" onKeyDown={
            function(e){
              if(next_time){
                dispatch(updateTimeOrchestrator(next_time))
              }
              return false
            }
          } />
            <div className="c-temporal-controls__section">
              <span className={"c-temporal-controls__control c-temporal-controls__control--full-width c-temporal-controls__control--tall c-temporal-controls__play " + (play.playing ? "is-playing " : "is-paused ") + (next_time ? "is-active" : "is-inactive")} role="img" aria-label="play" onClick={
                function(e){
                  dispatch(togglePlaying())
                }
              }>
                &nbsp;
              </span>
            </div>
            <div className="c-temporal-controls__section c-temporal-controls__section--secondary">
              <span className="c-temporal-controls__control c-temporal-controls__control--half-width c-temporal-controls__control--short c-temporal-controls__skip-back" aria-label="skip back one day" onClick={
                function(e){
                  if(previous_day_time){
                    dispatch(updateTimeOrchestrator(previous_day_time))
                  }
                }
              }>&nbsp;</span>
              <span className="c-temporal-controls__control c-temporal-controls__control--half-width c-temporal-controls__control--short c-temporal-controls__skip-forward" aria-label="skip forwards one day" onClick={
                function(e){
                  if(next_day_time){
                    dispatch(updateTimeOrchestrator(next_day_time))
                  }
                }
              }>&nbsp;</span>
            </div>
            <div className="c-temporal-controls__section c-temporal-controls__time">
              <div><Moment tz="Australia/Melbourne" format=" HH:mm ">{ time.selected_time }</Moment></div>
              <div><Moment tz="Australia/Melbourne" format=" ddd D/MM ">{ time.selected_time }</Moment></div>
            </div>
        </div>
      )
    }
  }

  renderTick(dispatch, play, next_time) {
    if(play.playing && !play.timer){

      if(next_time){
        let timer = setTimeout(()=>{
          dispatch(updateTimeOrchestrator(next_time))
          dispatch(setTimer(undefined))
        }, play.speed);
        dispatch(setTimer(timer, next_time))
      } else {
        dispatch(stopPlaying())
      }

    }
    return null
  }

}

const mapStateToProps = state => {
  return {
    indicators: state.indicators.indicators,
    time: state.time,
    play: state.play
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

TemporalNavigator = connect(mapStateToProps, mapDispatchToProps)(TemporalNavigator)

export default TemporalNavigator
