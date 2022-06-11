import { createSlice } from "@reduxjs/toolkit";
import random from "random-words"


const typeSlice = createSlice({
    name: "type",
    initialState: {
        words: random(10),
        timeLeft : 15,
        score: 0,
        wordIndex : 0,
        isPlaying: false,
        wordCheck: [],
        wordCount: 0
    },
    reducers: {
        setTimeLeft: (state, action) => {
            state.timeLeft -= 1
        },
        handleCorrect: (state, action) => {
            state.score += 1
            state.wordCheck.push(action.payload)
        },
        handleWrong: (state, action) => {
            state.score -= 1
            state.wordCheck.push(null)
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
            state.wordCheck = []
            state.wordIndex = 0
            state.timeLeft = 15
            state.isPlaying = true
        },
        stopGame : (state, action) => {
            state.isPlaying = false
       

        },
        incrementWordCount : (state, action) => {
            state.wordCount += 1
        },
        refreshWords: (state, action) => {
            state.words = [...state.words, ...random(10)]
        }

    }
})
export default typeSlice
export const typeSliceActions = typeSlice.actions