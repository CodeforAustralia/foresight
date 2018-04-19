import { startTime } from "../config/environment"

const oneHourInMilliseconds = 3600000

const _roundedHour = (time = new Date(Date.now())) => {
  let parsed_time = new Date(time)
  parsed_time.setMinutes(0)
  parsed_time.setSeconds(0)
  parsed_time.setMilliseconds(0)
  return(parsed_time.toISOString())
}

const _lastMidnight = (time = new Date(Date.now())) => {
  let parsed_time = new Date(time)
  parsed_time.setHours(0)
  parsed_time.setMinutes(0)
  parsed_time.setSeconds(0)
  parsed_time.setMilliseconds(0)
  return(parsed_time.toISOString())
}

const _oneWeekAfter = (time = _lastMidnight()) => {
  let parsed_time = new Date(time)
  let currentDate = parsed_time.getDate()
  parsed_time.setDate(currentDate + 7)
  return(parsed_time.toISOString())
}

const _eachPeriodBetween = (first_time = _lastMidnight(), last_time, period = oneHourInMilliseconds) => {
  last_time = last_time || _oneWeekAfter(first_time)
  let parsed_first_time = Date.parse(first_time)
  let parsed_last_time = Date.parse(last_time)
  let time_between_first_and_last_times = parsed_last_time - parsed_first_time
  let periods_between_first_and_last_times = Math.floor(time_between_first_and_last_times / period)
  let interpolated_times = []
  for(let i = 0; i < periods_between_first_and_last_times; i++) {
    interpolated_times.push(new Date(parsed_first_time + (i * period)).toISOString() )
  }
  return(interpolated_times)
}

const initialState = { selected_time: _roundedHour(), valid_times: _eachPeriodBetween((startTime || _lastMidnight())), display_time: undefined }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_TIME':
      return {
        selected_time: new Date(action.selected_time).toISOString(),
        display_time: state.display_time,
        valid_times: state.valid_times
      }
    case 'SET_DISPLAY_TIME':
      let display_time = action.display_time ? new Date(action.display_time).toISOString() : action.display_time
      return {
        selected_time: state.selected_time,
        display_time: display_time,
        valid_times: state.valid_times
      }
    case 'POPULATE_VALID_TIMES':
      return {
        selected_time: state.selected_time,
        display_time: state.display_time,
        valid_times: _eachPeriodBetween(_lastMidnight(action.from_time), _oneWeekAfter(_lastMidnight(action.from_time)))
      }
    default:
      return state
  }
}

export default reducer
