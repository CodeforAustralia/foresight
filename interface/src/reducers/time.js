const initialState = {selected_time: Date.parse("2017-10-29T13:00:00Z")}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_TIME':
      return {
        selected_time: Date.parse(action.selected_time)
      }
    default:
      return state
  }
}

export default reducer
