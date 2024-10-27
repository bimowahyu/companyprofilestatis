import { configureStore } from '@reduxjs/toolkit';
import authSlicereducer from '../fitur/AuthSlice.js'

export const store = configureStore ({
    reducer: {
        auth: authSlicereducer
    }
})