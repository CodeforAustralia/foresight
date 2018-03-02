import indicators from '../config/indicators'

const initialState = { indicators: indicators }

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
