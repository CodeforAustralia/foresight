import { indicatorMetaBase } from '../config/environment.js'

export const updateIndicatorTimesAsync = (index, indicators) => {
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
            updateIndicatorTimes(index, data.timeArray, data.creationTime, data.source)
          )
        }
      )
    }
  }
}

export const updateIndicatorTimes = (index, times, creationTime, dataSource) => {
  return {
    type: 'UPDATE_INDICATOR_TIMES',
    index: index,
    times: times,
    creationTime: creationTime,
    dataSource: dataSource
  }
}
