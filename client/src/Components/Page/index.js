import React from 'react';
import Switch from '../Switch';

import './page.css';

export default function Page({ name, title, customClass, children}) {
  return (
    <section id={name} className={`page${customClass ? ' ' + customClass : ''}`}>
      <div className="heading">
        <p>{'<'} back to gpires</p>
        <div className="opts">
          <h1>{title}</h1>
          <Switch />
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </section>
  )
}
