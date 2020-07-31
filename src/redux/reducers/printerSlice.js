import { createSlice } from '@reduxjs/toolkit'

export const printerSlice = createSlice({
  name: 'printer',
  initialState: {
    init: 0;
  },
  reducers: {
    name: (state, action) => {
      state.init += 1;
    }
  }
})

export const { name } = counterSlice.actions
export default counterSlice.reducer
