import React from 'react';

import './status.css';

export default function Status({ word, number, value }) {
  return (
    <div className="status">
      <div className="text">
        <p><span>{word}</span></p>
        <p>{number} times ({value}%)</p>
      </div>
      <div className="progress">
        <span style={{width: value + '%'}}></span>
      </div>
    </div>
  )
}
