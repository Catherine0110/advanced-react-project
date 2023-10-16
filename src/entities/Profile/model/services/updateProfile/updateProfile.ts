import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Profile, validateErrors } from 'entities/Profile/model/types/profile'
import i18next from 'i18next'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<validateErrors[]>>(
  'profile/updateProfile',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState())
    const errors = validateProfileData(formData)

    if (errors.length) {
      return rejectWithValue(errors)
    }
    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue([validateErrors.SERVER_ERROR])
    }
  },
)
