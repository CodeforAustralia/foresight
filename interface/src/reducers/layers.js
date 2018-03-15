import layers from '../config/layers'

let _sortAlphabeticallyByDisplayName = function(layers) {
  return(layers.sort(function(a, b){
      if(a.displayName < b.displayName) return -1;
      if(a.displayName > b.displayName) return 1;
      return 0;
  }))
}

const initialState = { layers: _sortAlphabeticallyByDisplayName(layers) }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_LAYER':
      let newLayers = state.layers.map((value, index) => {
        let new_value = {...value};
        if(index === action.index) {
          new_value.active = !value.active
        }
        return new_value
      })
      return {
        layers: newLayers
      }
    default:
      return state
  }
}

export default reducer
