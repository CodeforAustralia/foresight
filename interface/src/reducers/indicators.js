import indicators from '../config/indicators'

let _sortAlphabeticallyByDisplayName = function(layers) {
  return(layers.sort(function(a, b){
      if(a.displayName < b.displayName) return -1;
      if(a.displayName > b.displayName) return 1;
      return 0;
  }))
}

const initialState = { indicators: _sortAlphabeticallyByDisplayName(indicators) }

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
          newIndicator.available_times = action.times
          newIndicator.creationTime = action.creationTime
          newIndicator.dataSource = action.dataSource
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
