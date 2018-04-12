import Q from 'q';
import { indicatorMetaBase } from '../config/environment.js'

export const updateIndicatorTimesAsync = ( index, indicators, validTimes, deferred = Q.defer() ) => {
  console.log("in action")
  let indicator = indicators[index]
  return dispatch => {
    if(indicator.metaLink === undefined || indicator.metaLink === null){
      // no-op
    } else {
      fetch(
        (indicatorMetaBase + indicator.metaLink)
      ).then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          dispatch(
            updateIndicatorTimes(index, data.timeArray, data.creationTime, data.source, validTimes)
          );
          console.log(deferred)
          deferred.resolve();
        }
      )
    }
  }
}

export const updateIndicatorTimes = (index, times, creationTime, dataSource, validTimes) => {
  return {
    type: 'UPDATE_INDICATOR_TIMES',
    index: index,
    times: times,
    creationTime: creationTime,
    dataSource: dataSource,
    validTimes: validTimes
  }
}
