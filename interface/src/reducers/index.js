import { combineReducers } from 'redux'

import layers from './layers'
import indicators from './indicators'

const Reducers = combineReducers({
  layers,
  indicators
})

export default Reducers
