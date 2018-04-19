import stats from 'stats-lite'
import { parse, toSeconds } from 'iso8601-duration'

export const oneMinuteInMilliseconds = 60000

const _findDisplayTimeIndexFromAvailableTimes = (selected_time, available_times = {}) => {
  let available_time_index;
  if(available_times === {} || available_times.contained_points === {}) {
    available_time_index = undefined;
  } else {
    available_time_index = available_times.contained_points[selected_time]
  }
  return available_time_index
}

export const findDisplayTimeFromAvailableTimes = (selected_time, available_times = {}) => {
  let display_time = undefined;
  let available_time_index = _findDisplayTimeIndexFromAvailableTimes(selected_time, available_times)
  if(available_time_index !== undefined) {
    display_time = available_times.intervals[available_time_index].point_at
  }
  return display_time
}

export const getMostFrequentDuration = (time_points) => {
  // takes array of iso8601 dates
  // returns one iso8601 duration
  let durations = time_points.map((value, index) => {
    let duration = Date.parse(time_points[index + 1]) - Date.parse(value)
    var duration_minutes = (duration / oneMinuteInMilliseconds)
    return(duration_minutes)
  })
  return("PT" + stats.mode(durations) + "M")
}

export const getIntervals = (time_points, duration, valid_times) => {
  let duration_milliseconds = toSeconds(parse(duration)) * 1000
  let all_valid_periods = {}
  let valid_points = [];

  let interval_objects = time_points.map((value, index) => {
    let start_time = new Date(value).getTime()
    let start_time_plus_most_frequent_duration = start_time + (duration_milliseconds)
    let end_time;
    let next_time = time_points[(index + 1)]

    if(next_time) {
      let next_time_timestamp = new Date(time_points[(index + 1)]).getTime()
      if(next_time_timestamp < start_time_plus_most_frequent_duration){
        end_time = next_time_timestamp
      } else {
        end_time = start_time_plus_most_frequent_duration
      }
    } else {
      end_time = start_time_plus_most_frequent_duration
    }

    let end_time_less_one_minute = end_time - oneMinuteInMilliseconds

    let contained_periods = []
    valid_times.forEach((valid_time, i)=>{
      let valid_timestamp = new Date(valid_time).getTime()
      if(valid_timestamp === start_time) {
        valid_points.push(valid_time)
      }
      if(valid_timestamp >= start_time && valid_timestamp <= end_time_less_one_minute){
        contained_periods.push(valid_time)
        all_valid_periods[valid_time] = index
      }
    })

    return({
      "point_at": new Date(start_time).toISOString(),
      "starting_at": new Date(start_time).toISOString(),
      "ending_at": new Date(end_time_less_one_minute).toISOString(),
      "contained_periods": contained_periods
    })
  })

  return({"interval_objects": interval_objects, "all_valid_periods": all_valid_periods, "valid_points": valid_points})
}
