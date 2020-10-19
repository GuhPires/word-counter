import React, { useContext } from 'react';
import { AppCtx } from '../../context';

import './switch.css';

export default function Switch() {
  const ctx = useContext(AppCtx);

  return (
    <div className={`switch ${ctx.state.theme.toLowerCase()}`}>
      <div className="background"></div>
      <div className="selector" onClick={ctx.theme.change}></div>
      <p>{ctx.state.theme} Mode</p>
    </div>
  )
}
