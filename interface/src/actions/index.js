import { populatePointDetailsAsync, populatePointDetails } from './populate_point_details.js'
import { updateIndicatorTimesAsync, updateIndicatorTimes } from './update_indicator_times.js'
import { populateIndicatorDetails, populateIndicatorDetailsAsync } from './populate_indicator_details.js'
import { findDisplayTimeFromAvailableTimes } from '../utils/time_utils.js'

export const toggleLayer = (index) => {
  return {
    type: 'TOGGLE_LAYER',
    index: index
  }
}

export const setActivePoint = (latlng) => {
  return {
    type: 'SET_ACTIVE_POINT',
    latlng: latlng
  }
}

export const switchIndicators = (index) => {
  return {
    type: 'SWITCH_ACTIVE_INDICATOR',
    index: index
  }
}

export const setActiveTime = (selected_time) => {
  return {
    type: 'SET_ACTIVE_TIME',
    selected_time: selected_time
  }
}

export const setDisplayTime = (display_time) => {
  return {
    type: 'SET_DISPLAY_TIME',
    display_time: display_time
  }
}

export const findAndSetDisplayTime = (selected_time, available_times = {}) => {
  let display_time = findDisplayTimeFromAvailableTimes(selected_time, available_times)
  return {
    type: 'SET_DISPLAY_TIME',
    display_time: display_time
  }
}

export const populateValidTimes = (from_time) => {
  return {
    type: 'POPULATE_VALID_TIMES',
    from_time: from_time
  }
}

export const togglePlaying = () => {
  return {
    type: 'TOGGLE_PLAYING'
  }
}

export const stopPlaying = () => {
  return {
    type: 'STOP_PLAYING'
  }
}

export const setTimer = (timer, next_time) => {
  return {
    type: 'SET_TIMER',
    timer: timer,
    next_time: next_time
  }
}

export { populatePointDetailsAsync, populatePointDetails, updateIndicatorTimesAsync, updateIndicatorTimes, populateIndicatorDetails, populateIndicatorDetailsAsync }
