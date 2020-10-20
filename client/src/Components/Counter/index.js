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
  const [mostUsed, setMostUsed] = useState({});

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
    let topUsed = [...ctx.state.mostUsed];
    if(spaces !== ctx.state.spaces) {
      wordsObj = {};
      words.forEach(word => {
        wordsObj[word.toLowerCase()] = wordsObj[word.toLowerCase()] >= 1 ? wordsObj[word.toLowerCase()]+= 1 : 1;
        if(topUsed.length === 0) {
          for(let i = 0; i < 5; i++) topUsed.push({ word: '', count: 0 });
        }
        let idx = 0;
        for(const w of topUsed) {
          console.log('IDX: ', idx);
          if(wordsObj[word] > w.count) {
            topUsed[idx] = { word, count: wordsObj[word] };
            break;
          }
          idx++;
        }
      });
      console.log('Top Used: ', topUsed);
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
        {Object.keys(mostUsed).map(word => <Status word={word} number={mostUsed[word]} value={mostUsed[word] / wordsCount} />)}
      </div>
    </div>
  )
}
