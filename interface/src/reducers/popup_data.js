const initialState = {value: null, indicator: {}, point: {}}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'POPULATE_POINT_DETAILS':
      let point_details = { value: action.value, indicator: action.indicator, point: action.point }
      return point_details
    default:
      return state
  }
}

export default reducer
