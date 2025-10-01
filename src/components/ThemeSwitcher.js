import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ setTheme }) => {
  return (
    <div className="theme-switcher">
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('synthwave')}>Synthwave</button>
    </div>
  );
};

export default ThemeSwitcher;