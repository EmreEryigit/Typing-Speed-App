import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { typeSliceActions } from '../store/typeSlice';

function Input() {
    const dispatch = useDispatch();
    const wordIndex = useSelector(state => state.type.wordIndex);
    const [input, setInput] = useState("")
    const score = useSelector(state => state.type.score);
    const words = useSelector(state => state.type.words);
    const timeLeft = useSelector(state => state.type.timeLeft);
    const isPlaying = useSelector(state => state.type.isPlaying);
    const handleChange = (e) => {
        setInput(e.target.value)
        if(e.target.value.includes(" ")){
            dispatch(typeSliceActions.setWordIndex())
            if(e.target.value.trim() === words[wordIndex]){
                dispatch(typeSliceActions.handleCorrect())
               
            }
            setInput("")
        }   
    }

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(typeSliceActions.setTimeLeft())
        }, 1000)
        if(timeLeft === 0){
            dispatch(typeSliceActions.reset())
           console.log("reset")
            setInput("")
            clearInterval(timer)
            
        }
        return () => clearInterval(timer)
    }, [timeLeft])
    const startHandler = () => {
        dispatch(typeSliceActions.startGame())
    }
    
    console.log(timeLeft)
    console.log(score)
    console.log(wordIndex)
  return (
    <div>
        <button className='btn btn-primary' onClick={startHandler}> Play</button>
        <input type="text" onChange={handleChange} value={input} className='form-control' disabled={!isPlaying}/>
    </div>
  )
}

export default Input