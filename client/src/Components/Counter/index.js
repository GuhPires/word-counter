import React from 'react';
import Status from '../Status';

import './counter.css';

export default function Counter() {
  return (
    <div className="counter">
      <div className="words">
        <h2>1,456</h2>
        <h3>words</h3>
      </div>
      <div className="info">
        <p><span>78,908</span> characters</p>
        <p><span>890</span> spaces</p>
        <p><span>145</span> paragraphs</p>
        <p><span>45</span> numbers</p>
      </div>
      <div className="most-used">
        <p>MOST USED WORDS</p>
        <Status word="some" number="124" value="100"/>
        <Status word="test" number="100" value="75"/>
        <Status word="other" number="80" value="50"/>
        <Status word="see" number="24" value="20"/>
        <Status word="great" number="4" value="5"/>
      </div>
    </div>
  )
}
