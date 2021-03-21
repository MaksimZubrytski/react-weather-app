import React from 'react';
import { connect } from "react-redux";
import { initAppState } from "../../../../redux/reducers/init-reducer";
import './Refresh.scss';

const Refresh = (props) => {
  const {
    language,
    initAppStateTC,
  } = { ...props };

  const handeSubmit = () => {
    initAppStateTC(language);
  }

  return (
    <div className="refresh">
      <button className="button refresh__button" aria-label="refresh" type="button" onClick={handeSubmit} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  backgroundURL: state.backgroundData.backgroundURL,
  language: state.languageData.language,
});

export default connect(mapStateToProps, { initAppStateTC: initAppState })(Refresh);
