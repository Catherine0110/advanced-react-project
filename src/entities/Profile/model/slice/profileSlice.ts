import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData'
import { updateProfile } from 'entities/Profile/model/services/updateProfile'
import { Profile, ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoad: false,
  error: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action) => {
      state.form = {
        ...state.data,
        ...action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.isLoad = true
        state.error = undefined
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoad = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.payload
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.isLoad = true
        state.error = undefined
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoad = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = true
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.payload
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
