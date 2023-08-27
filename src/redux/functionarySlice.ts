import { createSlice } from '@reduxjs/toolkit'

export interface functionaryState {
  isConcluded: boolean;
}

export const functionarySlice = createSlice({
  name: 'functionary',
  initialState: {
    isConcluded: false,
  },
  reducers: {
    changeFunctionary(state, {payload}){
      return {...state, isConcluded: payload}
    },
  },
})

export const { changeFunctionary } = functionarySlice.actions

export default functionarySlice.reducer