import { combineReducers } from 'redux'

import layers from './layers'
import indicators from './indicators'
import point from './point'
import popup_data from './popup_data'

const Reducers = combineReducers({
  layers,
  point,
  indicators,
  popup_data
})

export default Reducers
