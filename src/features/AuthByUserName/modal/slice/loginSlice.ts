import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { loginByUserName } from 'features/AuthByUserName/modal/services/loginByUserName/loginByUserName'
import { loginSchema } from '../types/loginSchema'

const initialState: loginSchema = {
  username: '',
  password: '',
  isLoad: false,
  error: undefined,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        console.log('load')
        state.isLoad = true
        state.error = undefined
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        console.log('ok')
        state.isLoad = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        console.log('action', action)
        state.isLoad = false
        state.error = action.payload
      })
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
