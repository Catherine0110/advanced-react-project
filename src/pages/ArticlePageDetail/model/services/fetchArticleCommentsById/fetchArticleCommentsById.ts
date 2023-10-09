import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import i18next from 'i18next'
import { Comment } from 'entities/Comments'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchArticleCommentsById',
  async (commentId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    if (!commentId) {
      return rejectWithValue('error: id underfined')
    }
    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          commentId,
          _expand: 'user',
        },
      })
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      return rejectWithValue(i18next.t('article errror'))
    }
  },
)
