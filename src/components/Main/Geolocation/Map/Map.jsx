import React, { useRef, useEffect, useState } from 'react';
import { connect } from "react-redux";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import "./Map.scss";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uY2FybGVvbiIsImEiOiJja20wbjZuc2kxcG5mMm9vNnhqbTFvbG1qIn0.HMfhNN0ixxdzhTKkTRNJkA';

const Maps = (props) => {
  const { latitude, longitude } = { ...props };
  const mapContainer = useRef();

  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='map-container' ref={mapContainer} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  latitude: state.coordinates.latitude,
  longitude: state.coordinates.longitude,
});

export default connect(mapStateToProps, null)(Maps);
