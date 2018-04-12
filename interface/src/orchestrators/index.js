import Q from 'q';
import { switchIndicators, populatePointDetailsAsync, updateIndicatorTimesAsync, findAndSetDisplayTime } from '../actions'

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
