export const updateIndicatorTimesAsync = (index, indicators) => {
  let indicator = indicators[index]
  console.log("updating indicator times")
  return dispatch => {
    if(indicator === undefined || indicator.metaLink === null){
      // no-op
    } else {
      fetch(
        indicator.metaLink
      ).then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          console.log(data.timeArray)
          dispatch(
            updateIndicatorTimes(index, data.timeArray)
          )
        }
      )
    }
  }
}

export const updateIndicatorTimes = (index, times) => {
  return {
    type: 'UPDATE_INDICATOR_TIMES',
    index: index,
    times: times
  }
}
