import { configureStore } from '@reduxjs/toolkit'
import printerReducer from '../reducers/printerSlice'

export default configureStore({
  reducer: {
    printer: printerReducer
  }
})
