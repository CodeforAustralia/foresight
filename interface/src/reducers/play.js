import { playDelayMS } from "../config/environment"

const initialState = {playing: false, speed: (playDelayMS || 3000), next_time: undefined, timer: undefined}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "TOGGLE_PLAYING":
      clearInterval(state.timer)
      return {
        playing: !state.playing,
        speed: state.speed,
        next_time: undefined,
        timer: undefined
      }
    case "STOP_PLAYING":
      clearInterval(state.timer)
      return {
        playing: false,
        speed: state.speed,
        next_time: undefined,
        timer: undefined
      }
    case "SET_TIMER":
      return {
        playing: state.playing,
        speed: state.speed,
        next_time: action.next_time,
        timer: action.timer
      }
    default:
      return state
  }
}

export default reducer
