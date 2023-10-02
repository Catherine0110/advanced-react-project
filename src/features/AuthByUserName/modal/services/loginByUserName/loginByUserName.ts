import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { User, userActions } from 'entities/User'
import i18next from 'i18next'
import { USER_LOCALS_KEY } from 'shared/const/localStorage'

interface loginByUserNameProps {
    username: string,
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData)
      if (!response.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALS_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (error) {
      return rejectWithValue(i18next.t('Ошибка авторизации'))
    }
  },
)
