import React from 'react';
import { connect } from 'react-redux';
import { setDegreeType } from '../../../../redux/actions/degree-type-actions';
import './Temperature.scss';

const Temperature = (props) => {
  const {
    units,
    setDegreeTypeAC,
  } = { ...props };
  return (
    <div className="temperature">
      <label htmlFor="Fahrenheit">
        <span className={units === "imperial" ? "radio radio_left-border" : "radio radio_left-border isNotActive"}>°F</span>
        <input
          type="radio"
          name="degree-type"
          value="imperial"
          id="Fahrenheit"
          checked={units === "imperial"}
          onChange={(event) => (setDegreeTypeAC(event.target.value))}
        />
      </label>
      <label htmlFor="Celsius">
        <span className={units === "metric" ? "radio radio_right-border" : "radio radio_right-border isNotActive"}>°С</span>
        <input
          type="radio"
          name="degree-type"
          value="metric"
          id="Celsius"
          checked={units === "metric"}
          onChange={(event) => (setDegreeTypeAC(event.target.value))}
        />
      </label>
    </div>
  )
};

const mapStateToProps = (state) => ({
  units: state.degreeTypeData.units,
  latitude: state.coordinates.latitude,
  longitude: state.coordinates.longitude,
});

export default connect(mapStateToProps,
  { setDegreeTypeAC: setDegreeType })(Temperature);
