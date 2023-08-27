import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice'
import functionaryReducer from './functionarySlice'

export const store = configureStore({
  reducer:{
    form: formReducer,
    functionary: functionaryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;