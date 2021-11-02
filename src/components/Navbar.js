import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = (props) => {
  // const toggleMode = e => {
  //   e.preventDefault();
  //   props.setDarkMode(!props.darkMode);
  // };
  // const [darkMode, toggleMode] = useDarkMode();

  const [ darkMode, toggleMode ] = useDarkMode();

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
