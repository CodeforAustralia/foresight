import Q from 'q';
import { switchIndicators, populatePointDetailsAsync, updateIndicatorTimesAsync, findAndSetDisplayTime, setActiveTime, setDisplayTime } from '../actions'

export const updateTimeOrchestrator = (selected_time, display_time = null) => {
  return(dispatch, getState) => {
    if((selected_time === getState().time.selected_time) && (display_time === getState().time.display_time)) {
      // no-op
    } else {
      let indicators = getState().indicators.indicators
      let active_indicators = indicators.filter(layer => layer.active === true);
      dispatch(setActiveTime(selected_time))
      if(display_time) {
        dispatch(setDisplayTime(display_time))
      } else if(active_indicators.length > 0) {
        dispatch(findAndSetDisplayTime(selected_time, active_indicators[0].available_times))
      }
      dispatch(populatePointDetailsAsync(getState().point, active_indicators[0], getState().time.display_time))
    }
  }
}

export const updateIndicatorOrchestrator = (indicator_index, indicators, time, active_point) => {
  return(dispatch, getState) => {
    const deferred = Q.defer();

    dispatch(switchIndicators(indicator_index))
    dispatch(updateIndicatorTimesAsync(indicator_index, indicators, time.valid_times, deferred));

   deferred.promise.then((available_times) => {
      dispatch(findAndSetDisplayTime(time.selected_time, getState().indicators.indicators[indicator_index].available_times))
      dispatch(populatePointDetailsAsync(active_point, indicators[indicator_index], getState().time.display_time))
    }).catch(()=>{
        //handle errors here;
    });
  }
}
