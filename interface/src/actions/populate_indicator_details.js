import { indicatorMetaBase } from "../config/environment.js"

export const populateIndicatorDetailsAsync = () => {
  return dispatch => {
    fetch(
      (indicatorMetaBase + "meta/index.json")
    ).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        dispatch(
          populateIndicatorDetails(data)
        )
      }
    )
  }
}

export const populateIndicatorDetails = (data) => {
  return {
    type: 'POPULATE_INDICATOR_DETAILS',
    indicators: data
  }
}
