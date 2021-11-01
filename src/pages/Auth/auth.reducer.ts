import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from './auth.types'

export interface AuthState {
  isAuthenticated: boolean
  user: IUser
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const slice = createSlice({
  name: 'app/catalogs',
  initialState,
  reducers: {
    login: (store, action: PayloadAction<IUser>) => {
      store.isAuthenticated = true
      store.user = action.payload
    },
    logout: (store) => {
      store.isAuthenticated = false
      store.user = null
    },
    updateUser: (store, action: PayloadAction<IUser>) => {
      store.user = { ...store.user, ...action.payload }
    },
  },
})

export const authSliceActions = slice.actions

const authReducer = slice.reducer
export default authReducer
