import React from 'react'
import {useSelector} from 'react-redux';

function Words() {
    const words = useSelector(state => state.type.words);
    const wordIndex = useSelector(state => state.type.wordIndex);
  console.log(words)
  return (
    <div>
      {words.map((word, index) => (
        <div className={"d-inline-block mx-2 " + (wordIndex === index ? " bg-primary" : "")} key={index}>{word}</div>
      ))}
    </div>
  )
}

export default Words
