import React, { useState } from 'react';

import './switch.css';

export default function Switch() {
  const [theme, setTheme] = useState('Light');

  const changeTheme = () => {
    switch(theme) {
      case 'Light':
        setTheme('Dark');
        break;
      case 'Dark':
      default:
        setTheme('Light');
        break;
    }
  }

  return (
    <div className="switch">
      <div className="background"></div>
      <div className="selector" onClick={changeTheme}></div>
      <p>{theme} Mode</p>
    </div>
  )
}
