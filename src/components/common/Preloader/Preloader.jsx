import React from 'react';
import preloader from "../../../assets/img/preloader/preloader.svg";
import "./Preloader.scss";

const Preloader = () => (
  <div className="preloader">
    <img src={preloader} alt="preloader" />
  </div>
)

export default Preloader;
