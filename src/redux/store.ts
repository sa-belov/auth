import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../pages/Auth/auth.reducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
