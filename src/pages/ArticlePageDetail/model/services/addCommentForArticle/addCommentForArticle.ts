import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { articleDetailData } from 'entities/Articles/models/selectors/articleDetail'
import { Comment } from 'entities/Comments'
import { getUserAuthData } from 'entities/User'
import i18next from 'i18next'
import { fetchArticleCommentsById } from '../fetchArticleCommentsById/fetchArticleCommentsById'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (text, { dispatch, extra, rejectWithValue, getState }) => {
    const article = articleDetailData(getState())
    const userData = getUserAuthData(getState())
    if (!article || !text || !userData) {
      return rejectWithValue('sendComment data underfined')
    }
    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      })
      if (!response.data) {
        throw new Error()
      }
      dispatch(fetchArticleCommentsById(article.id))
      return response.data
    } catch (error) {
      return rejectWithValue(i18next.t('addComment error'))
    }
  },
)
