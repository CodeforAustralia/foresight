import React from 'react'
import { connect } from 'react-redux'
import { Popup } from 'react-leaflet'
import './PointDetails.css'

let PointDetails = ({ dispatch, point, layer, popup_data }) => {
  var popUp;
  if(point.lat !== null && popup_data.value !== null){
    popUp = <Popup position={ point }>
      <div className="c-point-details">
        <div>
          <p className="c-point-details__indicator">{popup_data.indicator.displayName}</p>
          <p className="c-point-details__value">{parseFloat(popup_data.value).toFixed(popup_data.indicator.rounding_rule || 0) + " " + popup_data.indicator.units}</p>
          <p className="c-point-details__latlng"><strong>Location:</strong> {popup_data.point.lat ? popup_data.point.lat.toFixed(3) : "Not set"},{popup_data.point.lng ? popup_data.point.lng.toFixed(3) : ""}</p>
        </div>
      </div>
    </Popup>
  } else {
    popUp = null
  }
  return (
    popUp
  )
}

const mapStateToProps = state => {
  let active_indicators = state.indicators.indicators.filter(indicator => indicator.active === true);
  return {
    point: state.point,
    layer: active_indicators[0],
    popup_data: state.popup_data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

PointDetails = connect(mapStateToProps, mapDispatchToProps)(PointDetails)

export default PointDetails
