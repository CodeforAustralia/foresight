// Populates indicator data for a given point.

let _parsePointDetailsData = function(data){
  if(data.features.length > 0) {
    return(data.features[0].properties)
  } else {
    return ({})
  }
}

let _constructRequestString = function(source, lat, lng, query_layers, time, boundingBoxExtension = 0.05, requestFormat = "application/json", projectionFormat = "EPSG:4326") {
  // Documentation for this request:
  // http://docs.geoserver.org/stable/en/user/services/wms/reference.html
  let baseRequestParameters = "SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&X=1&Y=1&WIDTH=1&HEIGHT=1"
  let parsed_time = new Date(time)
  let formatted_time = parsed_time.toISOString()
  return(
    source + baseRequestParameters
    + "&SRS=" + projectionFormat
    + "&QUERY_LAYERS=" + query_layers
    + "&LAYERS=" + query_layers
    + "&INFO_FORMAT=" + requestFormat
    + "&EXCEPTIONS=" + requestFormat
    + "&BBOX=" + lng + "," + lat + "," + (lng + boundingBoxExtension) + "," + (lat + boundingBoxExtension)
    + "&TIME=" + formatted_time
  )
}

export const populatePointDetailsAsync = (point, layer, time) => {
  return dispatch => {
    if(layer === undefined || point.lat === null){
      // no-op
    } else {
      fetch(
        _constructRequestString(layer.source, point.lat, point.lng, layer.params.layers, time)
      ).then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          dispatch(
            populatePointDetails(data)
          )
        }
      )
    }
  }
}

export const populatePointDetails = (data) => {
  return {
    type: 'POPULATE_POINT_DETAILS',
    data: _parsePointDetailsData(data)
  }
}
