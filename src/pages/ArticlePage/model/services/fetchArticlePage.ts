import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { Articles } from 'entities/Articles'
import i18next from 'i18next'
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors'

interface fetchArticlePageProps {
  page: number
}

export const fetchArticlePage = createAsyncThunk<Articles[], fetchArticlePageProps, ThunkConfig<string>>(
  'articlePage/fetchArticlePage',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const { page = 1 } = props
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Articles[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      })
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue(i18next.t('articles errror'))
    }
  },
)
