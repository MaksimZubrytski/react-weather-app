import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initAppState } from '../../../redux/reducers/init-reducer';
import './App.scss';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import Preloader from '../../common/Preloader/Preloader';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';

const App = (props) => {
  const {
    isFetching,
    initAppStateTC,
    language,
    isError,
  } = { ...props };
  useEffect(() => {
    initAppStateTC(language);
  }, [])
  const catchingAnError = () => {
    if (isError) {
      return <ErrorBoundary />
    }
    return (isFetching ? <Preloader /> : <Main />)
  }
  return (
    <div className="App">
      <Header />
      {catchingAnError()}
    </div>
  )
};

const mapStateToProps = (state) => ({
  isFetching: state.coordinates.isFetching,
  language: state.languageData.language,
  backgroundURL: state.backgroundData.backgroundURL,
  isError: state.coordinates.isError,
});

export default connect(mapStateToProps,
  { initAppStateTC: initAppState })(App);
