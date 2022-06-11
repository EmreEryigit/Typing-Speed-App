import React from 'react'
import {useSelector} from 'react-redux';
function Result() {
    const wordCount = useSelector(state => state.type.wordCount);
    const wordCheck = useSelector(state => state.type.wordCheck);
    const trueAnswerCount = wordCheck.filter(item => item).length
    const wrongAnswerCount = wordCheck.filter(item => !item).length

    const percent = (trueAnswerCount / wordCheck.length) * 100


  return (
    <div className='card my-2 border shadow-lg' >
        <p>True Answers: {trueAnswerCount}</p>
        <p>Wrong Answers: {wrongAnswerCount}</p>
        <p>Accuracy: {percent}%</p>
        <p>Total Keystroke: {wordCount}</p>
    </div>
  )
}

export default Result