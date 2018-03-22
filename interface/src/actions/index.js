import { populatePointDetailsAsync, populatePointDetails } from './populate_point_details.js'
import { updateIndicatorTimesAsync, updateIndicatorTimes } from './update_indicator_times.js'
import { populateIndicatorDetails, populateIndicatorDetailsAsync } from './populate_indicator_details.js'

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

export { populatePointDetailsAsync, populatePointDetails, updateIndicatorTimesAsync, updateIndicatorTimes, populateIndicatorDetails, populateIndicatorDetailsAsync }
