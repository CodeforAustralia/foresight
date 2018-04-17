import { geoserverBase } from '../config/environment.js'

// Populates indicator data for a given point.

let _parsePointDetailsData = function(data){
  if(data.features && data.features.length > 0) {
    let properties = data.features[0].properties
    let data_keys = Object.keys(properties)
    if(data_keys.length === 1) {
      return properties[data_keys]
    } else {
      return null
    }
  } else {
    return null
  }
}

let _constructRequestString = function(base, source, lat, lng, query_layers, time, boundingBoxExtension = 0.02, requestFormat = "application/json", projectionFormat = "EPSG:4326") {
  // Documentation for this request:
  // http://docs.geoserver.org/stable/en/user/services/wms/reference.html
  let baseRequestParameters = "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&X=1&Y=1&WIDTH=2&HEIGHT=2"
  let parsed_time = new Date(time)
  let formatted_time = parsed_time.toISOString()

  let request_string = (
    base
    + source
    + baseRequestParameters
    + "&SRS=" + projectionFormat
    + "&QUERY_LAYERS=" + query_layers
    + "&LAYERS=" + query_layers
    + "&INFO_FORMAT=" + requestFormat
    + "&EXCEPTIONS=" + requestFormat
    + "&BBOX=" + (lng - boundingBoxExtension) + "," + (lat - boundingBoxExtension) + "," + (lng + boundingBoxExtension) + "," + (lat + boundingBoxExtension)
    + "&TIME=" + formatted_time
  )
  return request_string
}

export const populatePointDetailsAsync = (point, layer, time) => {
  return dispatch => {
    if(layer === undefined || point.lat === null || time === undefined){
      dispatch(populatePointDetails({}, point, layer, time))
    } else {
      let base = layer.base || geoserverBase
      fetch(
        _constructRequestString(base, layer.source, point.lat, point.lng, layer.params.layers, time)
      ).then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          dispatch(
            populatePointDetails(data, point, layer, time)
          )
        }
      )
    }
  }
}

export const populatePointDetails = (data, point, layer, time) => {
  return {
    type: 'POPULATE_POINT_DETAILS',
    value: _parsePointDetailsData(data),
    indicator: layer,
    point: point,
    time: time
  }
}
