import React, { useState } from 'react';

import './text-input.css';

export default function TextInput() {
  const [text, setText] = useState('');

  const onType = e => {
    console.log('E: ', e.target.value);
    setText(e.target.value);
  }

  return (
    <div className="text-input">
      <textarea placeholder="Type or paste text in here..." onChange={e => onType(e)} value={text} />
    </div>
  )
}
