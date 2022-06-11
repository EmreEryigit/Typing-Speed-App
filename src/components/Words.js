import React from 'react'
import {useSelector} from 'react-redux';

function Words() {
    const words = useSelector(state => state.type.words);
    const wordIndex = useSelector(state => state.type.wordIndex);
    const wordCheck = useSelector(state => state.type.wordCheck);
  
  
  return (
    <div className='card card-body'>
      {words.map((word, index) => (
        <div className={"d-inline-block mx-2 " + (wordIndex === index ? " bg-primary " : " ")+ ( wordCheck[index] ? " text-success " : " text-danger ") + (index >= wordIndex ? "text-dark" : "")} key={index}>{word}</div>
      ))}
    </div>
  )
}

export default Words
