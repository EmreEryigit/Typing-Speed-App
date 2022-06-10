import { createSlice } from "@reduxjs/toolkit";
import random from "random-words"
const typeSlice = createSlice({
    name: "type",
    initialState: {
        words: random(10),
        timeLeft : 5,
        score: 0,
        wordIndex : 0,
        isPlaying: false
    },
    reducers: {
        setTimeLeft: (state, action) => {
            state.timeLeft -= 1
        },
        handleCorrect: (state, action) => {
            state.score += 1
        },
        handleWrong: (state, action) => {
            state.score -= 1
        },
        reset: (state, action) => {
            state.score = 0
            
            state.words = random(10)
            state.wordIndex = 0
            state.isPlaying = false
        },
        setWordIndex : (state, action) => {
            state.wordIndex += 1
        },
        startGame : (state, action) => {
            state.score = 0
            state.words = random(10)
            state.wordIndex = 0
            state.timeLeft = 5
            state.isPlaying = true
        }
    }
})
export default typeSlice
export const typeSliceActions = typeSlice.actions