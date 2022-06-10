import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { typeSliceActions } from '../store/typeSlice';

function Input() {
    const dispatch = useDispatch();
    const wordIndex = useSelector(state => state.type.wordIndex);
    const [input, setInput] = useState("")
    const words = useSelector(state => state.type.words);
    const timeLeft = useSelector(state => state.type.timeLeft);
    const isPlaying = useSelector(state => state.type.isPlaying);
    
    const handleChange = (e) => {
        dispatch(typeSliceActions.incrementWordCount())
        setInput(e.target.value)
        if(e.target.value.includes(" ")){
            dispatch(typeSliceActions.setWordIndex())
            if(wordIndex%10 === 9){
                dispatch(typeSliceActions.refreshWords())
            }
            if(e.target.value.trim() === words[wordIndex]){
                dispatch(typeSliceActions.handleCorrect(words[wordIndex]))
            }else {
                dispatch(typeSliceActions.handleWrong(null))
            }
            setInput("")
        }   
    }

    useEffect(() => {
        let timer;
        if(isPlaying){
            timer = setInterval(() => {
                dispatch(typeSliceActions.setTimeLeft())
            }, 1000)
            if(timeLeft === 0){
                dispatch(typeSliceActions.stopGame())
               console.log("reset")
               clearInterval(timer)
                
            }
            
        }
           
        return () => clearInterval(timer)
    }, [timeLeft, isPlaying,dispatch])
    const startHandler = () => {
        dispatch(typeSliceActions.startGame())
    }
    
 
   
  return (
    <div>
        <button className='btn btn-primary' onClick={startHandler}> Play</button>
        <input type="text" onChange={handleChange} value={input} className='form-control' disabled={!isPlaying}/>
    </div>
  )
}

export default Input