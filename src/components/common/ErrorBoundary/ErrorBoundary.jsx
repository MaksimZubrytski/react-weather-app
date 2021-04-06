import React from 'react';
import { connect } from 'react-redux';
import "./ErrorBoundary.scss";

const ErrorBoundary = (props) => {
  const { language } = { ...props };

  return (
    <div className='error-container'>
      <h1 className='error__title'>{language === 'Ru' ? 'Город не найден...' : 'City not found...'}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({ language: state.languageData.language });

export default connect(mapStateToProps,
  {})(ErrorBoundary);
