import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../src/app/Features/counter/CounterSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})