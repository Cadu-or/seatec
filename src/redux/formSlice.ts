import { createSlice } from '@reduxjs/toolkit'

export interface formState {
  status: boolean;
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    status: false,
  },
  reducers: {
    changeForm : (state) => {
      state.status = !state.status
    },
  },
})

export const { changeForm } = formSlice.actions

export default formSlice.reducer
