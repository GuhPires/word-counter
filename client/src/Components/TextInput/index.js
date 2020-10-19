import React, { useContext, useState } from 'react';
import { AppCtx } from '../../context';

import './text-input.css';

export default function TextInput() {
  const ctx = useContext(AppCtx);

  const [text, setText] = useState('');

  const onType = e => {
    setText(e.target.value);
    ctx.text.type(e.target.value);
  }

  return (
    <div className="text-input">
      <textarea placeholder="Type or paste text in here..." onChange={e => onType(e)} value={text} />
    </div>
  )
}
