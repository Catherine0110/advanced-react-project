import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserSchema } from 'entities/User/model/types/user'
import { USER_LOCALS_KEY } from 'shared/const/localStorage'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALS_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logOut: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALS_KEY)
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
