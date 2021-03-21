import React from 'react';
import { connect } from "react-redux";
import './PlaceLabel.scss';

const PlaceLabel = (props) => {
  const {
    place,
    userCity,
  } = { ...props };
  return (
    <>
      <h2 className="placelabel__title">{place || userCity}</h2>
    </>
  )
};

const mapStateToProps = (state) => ({
  place: state.coordinates.place,
  userCity: state.coordinates.userCity,
});

export default connect(mapStateToProps, { })(PlaceLabel);
