import React from 'react';

import './page.css';

export default function Page({ name, title, theme, customClass, children}) {
  return (
    <section id={name} className={`page${theme ? ' ' + theme : ''}${customClass ? ' ' + customClass : ''}`}>
      <div className="heading">
        <p>{'<'} back to gpires</p>
        <h1>{title}</h1>
      </div>
      <div className="content">
        {children}
      </div>
    </section>
  )
}
