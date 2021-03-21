import React, { useState } from 'react';
import { connect } from "react-redux";
import { initSearchState } from '../../../redux/reducers/init-reducer'
import './Search.scss';

const Search = (props) => {
  const {
    initSearchStateTC,
    language,
  } = { ...props };
  const [inputValue, setInputValue] = useState('');

  const hadnleSubmit = (event) => {
    event.preventDefault();
    initSearchStateTC(inputValue, language)
    setInputValue('')
  }
  let placeHolderLabel;
  if (language === "Ru") {
    placeHolderLabel = 'Поиск города'
  } else {
    placeHolderLabel = 'Search city'
  }
  return (
    <div className="search">
      <form className="search__form" onSubmit={hadnleSubmit}>
        <input
          type="text"
          placeholder={placeHolderLabel}
          className="search__input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search__button">{language === "Ru" ? "Поиск" : "Search"}</button>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => ({
  place: state.coordinates.place,
  latitude: state.coordinates.latitude,
  longitude: state.coordinates.longitude,
  language: state.languageData.language,
});

export default connect(mapStateToProps, { initSearchStateTC: initSearchState })(Search);
