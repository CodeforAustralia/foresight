import { populatePointDetailsAsync, populatePointDetails } from './populate_point_details.js'

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

export { populatePointDetailsAsync, populatePointDetails }
