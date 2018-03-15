const initialState = {lat:null, lng:null}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_POINT':
      return {
        lat: action.latlng.lat,
        lng: action.latlng.lng
      }
    default:
      return state
  }
}

export default reducer
