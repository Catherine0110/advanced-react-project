import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import i18next from 'i18next'
import { USER_LOCALS_KEY } from 'shared/const/localStorage'

interface loginByUserNameProps {
    username: string,
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, {rejectValue: string}>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)
      if (!response.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALS_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(i18next.t('Ошибка авторизации'))
    }
  },
)