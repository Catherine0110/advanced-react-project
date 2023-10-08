import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import i18next from 'i18next'
import { Articles } from '../types/articles'

export const fetchArticleData = createAsyncThunk<Articles, string, ThunkConfig<string>>(
  'article/fetchArticleData',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<Articles>(`/articles/${id}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue(i18next.t('article errror'))
    }
  },
)
