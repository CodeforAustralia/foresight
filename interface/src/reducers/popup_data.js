const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'POPULATE_POINT_DETAILS':
      return {
        ...action.data
      }
    default:
      return state
  }
}

export default reducer
