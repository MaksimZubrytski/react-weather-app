import React from 'react';
import Language from './Controllers/Language/Language';
import Refresh from './Controllers/Refresh/Refresh';
import Temperature from './Controllers/Temperature/Temperature';
import './Header.scss';
import Search from './Search/Search';

const Header = () => (
  <header className="header">
    <div className="wrapper header__wrapper">
      <div className="options">
        <Refresh />
        <Language />
        <Temperature />
      </div>
      <Search />
    </div>
  </header>
);

export default Header;
