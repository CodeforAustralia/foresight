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
  switch(action.type) {
    case 'SWITCH_ACTIVE_INDICATOR':
      let newIndicators = state.indicators.map((value, index) => {
        let new_value = {...value};
        new_value.active = false
        if(index === action.index) {
          new_value.active = !value.active
        }
        return new_value
      })
      return {
        indicators: newIndicators
      }
    default:
      return state
  }
}

export default reducer
