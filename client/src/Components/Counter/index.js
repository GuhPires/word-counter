import React, { useContext, useState, useEffect } from 'react';
import { AppCtx } from '../../context';
import Status from '../Status';

import './counter.css';

export default function Counter() {
  const ctx = useContext(AppCtx);

  const [wordsCount, setWords] = useState(0);
  const [charsCount, setChars] = useState(0);
  const [spacesCount, setSpaces] = useState(0);
  const [numbersCount, setNumbers] = useState(0);
  const [paragraphsCount, setParagraphs] = useState(0);

  useEffect(() => {
    count(ctx.state.text)
  }, [ctx.state.text]);

  const count = text => {
    const words = text ? text.replace(/[?,%.()[\]<>!]/g, ' ').split(' ').filter(word => word) : [];
    const chars = Array.from(text.matchAll('.')).length;
    const spaces = Array.from(text.matchAll(' ')).length;
    const numbers = Array.from(text.matchAll(/\d/g)).length;
    const paragraphs = Array.from(text.matchAll(/\n/g)).length;

    setWords(words.length);
    setChars(chars);
    setSpaces(spaces);
    setNumbers(numbers);
    setParagraphs(paragraphs);

    let wordsObj = {...ctx.state.wordsObj};
    if(spaces != ctx.state.spaces) {
      wordsObj = {};
      words.forEach(word => {
        wordsObj[word.toLowerCase()] = wordsObj[word.toLowerCase()] >= 1 ? wordsObj[word.toLowerCase()]+= 1 : 1;
      });
    } if(chars === 0) wordsObj = {};

    ctx.text.countAll(wordsObj, words.length, chars, spaces, numbers, paragraphs);
  }

  return (
    <div className="counter">
      <div className="words">
        <h2>{wordsCount}</h2>
        <h3>words</h3>
      </div>
      <div className="info">
        <p><span>{charsCount}</span> characters</p>
        <p><span>{spacesCount}</span> spaces</p>
        <p><span>{paragraphsCount}</span> paragraphs</p>
        <p><span>{numbersCount}</span> numbers</p>
      </div>
      <div className="most-used">
        <p>MOST USED WORDS</p>
        <Status word="some" number="124" value="100" />
        <Status word="test" number="100" value="75" />
        <Status word="other" number="80" value="50" />
        <Status word="see" number="24" value="20" />
        <Status word="great" number="4" value="5" />
      </div>
    </div>
  )
}
