import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { loginByUserName } from 'features/AuthByUserName/modal/services/loginByUserName/loginByUserName'
import { loginSchema } from '../types/loginSchema'

const initialState: loginSchema = {
  username: '',
  password: '',
  isLoad: false,
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
        state.isLoad = true
        state.error = ''
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoad = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.payload
      })
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
