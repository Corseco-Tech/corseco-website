import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './example-slice'

const store = configureStore({
  reducer: {
    example: exampleReducer,
    // add other reducers here
  },
})

export default store
