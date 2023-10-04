import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Profile } from 'entities/Profile/model/types/profile'
import i18next from 'i18next'

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfile',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState())
      const response = await extra.api.put<Profile>('/profile', formData)
      return response.data
    } catch (error) {
      return rejectWithValue(i18next.t('update prfle error'))
    }
  },
)
