import React, { useContext, useState, useEffect } from 'react';
import { AppCtx } from '../../context';
import Status from '../Status';

import './counter.css';

export default function Counter() {
  const ctx = useContext(AppCtx);

  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [spaces, setSpaces] = useState(0);
  const [numbers, setNumbers] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);

  useEffect(() => {
    count(ctx.state.text)
  }, [ctx.state.text]);

  const count = text => {
    const words = text ? text.split(' ').filter(word => word) : [];
    const chars = Array.from(text.matchAll('.')).length;
    const spaces = Array.from(text.matchAll(' ')).length;
    const numbers = Array.from(text.matchAll(/\d/g)).length;
    const paragraphs = Array.from(text.matchAll(/\n/g)).length;

    setWords(words.length);
    setChars(chars);
    setSpaces(spaces);
    setNumbers(numbers);
    setParagraphs(paragraphs);
    console.log('Words: ', words, ' Chars: ', chars, ' Spaces: ', spaces, ' Numbers: ', numbers, ' Paragraphs: ', paragraphs);

    const wordsObj = {...ctx.state.wordsObj};
    // if(words.length !== ctx.state.words) {
    //   const lastWord = words[words.length - 1];
    //   wordsObj[lastWord] = wordsObj[lastWord] ? wordsObj[lastWord]++ : 0;

    // }
    // console.log('Words OBJ: ', wordsObj)

    ctx.text.countAll(wordsObj, words.length, chars, spaces, numbers, paragraphs);
  }

  return (
    <div className="counter">
      <div className="words">
        <h2>{words}</h2>
        <h3>words</h3>
      </div>
      <div className="info">
  <p><span>{chars}</span> characters</p>
  <p><span>{spaces}</span> spaces</p>
  <p><span>{paragraphs}</span> paragraphs</p>
  <p><span>{numbers}</span> numbers</p>
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
