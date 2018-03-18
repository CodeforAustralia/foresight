import React from 'react'
import { connect } from 'react-redux'
import { Popup } from 'react-leaflet'
import './PointDetails.css'

let PointDetails = ({ dispatch, point, layer, popup_data }) => {
  var popUp;
  if(point.lat !== null){
    popUp = <Popup position={ point }>
      <div className="c-point-details">
        <p>{
          Object.keys(popup_data).map((value, i) => (
            <div key={i}>
              <span className="c-point-details__indicator">{value}: </span>
              <span className="c-point-details__value">{parseFloat(popup_data[value]).toFixed(1)}</span>
            </div>
          ))
        }</p>
        <p className="c-point-details__latlng">{point.lat.toFixed(3)},{point.lng.toFixed(3)}</p>
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
