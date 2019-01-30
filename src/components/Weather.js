import React from "react";

const Weather = props => (
  <div>
    { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
    { props.tempature && <p>Tempature: { props.tempature }</p>}
    { props.humidity && <p>Humidity: { props.humidity }</p>}  
    { props.description && <p>Conditions: { props.description }</p>}
    { props.error && <p>{ props.error }</p>}
  </div>
);

export default Weather;