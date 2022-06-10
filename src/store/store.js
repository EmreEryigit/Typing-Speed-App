import { configureStore } from "@reduxjs/toolkit";
import typeSlice from "./typeSlice";

const store = configureStore({
    reducer: {
        type: typeSlice.reducer
    }
})
export default store