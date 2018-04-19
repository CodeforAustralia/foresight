import { combineReducers } from 'redux'

import layers from './layers'
import indicators from './indicators'
import point from './point'
import popup_data from './popup_data'
import time from './time'
import play from './play'

const Reducers = combineReducers({
  layers,
  point,
  indicators,
  popup_data,
  time,
  play
})

export default Reducers
