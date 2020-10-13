import React from 'react';

import './page.css';

export default function Page({ name, title, theme, customClass, children}) {
  return (
    <section id={name} className={`page${theme ? ' ' + theme : ''}${customClass ? ' ' + customClass : ''}`}>
      <div>
        <p className="back">{'<'} back to gpires</p>
        <h1 className="title">{title}</h1>
      </div>
      {children}
    </section>
  )
}
