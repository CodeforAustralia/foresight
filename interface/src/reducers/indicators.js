import indicators from '../config/indicators'
import { getMostFrequentDuration, getIntervals } from '../utils/time_utils'
import { sortAlphabeticallyByDisplayName } from '../utils/layer_utils'

const initialState = { indicators: sortAlphabeticallyByDisplayName(indicators) }

const reducer = (state = initialState, action) => {
  let newIndicators, newIndicator
  switch(action.type) {
    case 'POPULATE_INDICATOR_DETAILS':
      newIndicators = state.indicators.map((value, index) => {
        newIndicator = {...value}
        let matching_action_indicators = action.indicators.filter(indicator => indicator.prefix === value.prefix);
        matching_action_indicators.forEach(function(action_indicator){
          newIndicator.available = true;
          newIndicator.metaLink = action_indicator.url;
        })
        return newIndicator;
      })
      return {
        indicators: newIndicators
      }
    case 'SWITCH_ACTIVE_INDICATOR':
      newIndicators = state.indicators.map((value, index) => {
        newIndicator = {...value};
        newIndicator.active = false
        if(index === action.index) {
          newIndicator.active = !value.active
        }
        return newIndicator
      })
      return {
        indicators: newIndicators
      }
    case 'UPDATE_INDICATOR_TIMES':
      newIndicators = state.indicators.map((value, index) => {
        newIndicator = {...value};
        if(index === action.index) {
          let most_frequent_duration = getMostFrequentDuration(action.times)
          let intervals = getIntervals(action.times, most_frequent_duration, action.validTimes)
          newIndicator.creationTime = action.creationTime
          newIndicator.dataSource = action.dataSource
          newIndicator.most_frequent_duration = most_frequent_duration
          newIndicator.available_times = {
            points: action.times,
            contained_points: intervals.all_valid_periods,
            intervals: intervals.interval_objects
          }
        }
        return newIndicator
      })
      return {
        indicators: newIndicators
      }
    default:
      return state
  }
}

export default reducer
