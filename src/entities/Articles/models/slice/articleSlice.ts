import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleData } from '../services/getArticleById'
import { Articles, ArticlesSchema } from '../types/articles'

const initialState: ArticlesSchema = {
  data: undefined,
  isLoad: false,
  error: undefined,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    // setReadOnly: (state, action: PayloadAction<boolean>) => {
    //   state.readonly = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleData.pending, (state, action) => {
        state.isLoad = true
        state.error = undefined
      })
      .addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<Articles>) => {
        state.isLoad = false
        state.data = action.payload
      })
      .addCase(fetchArticleData.rejected, (state, action) => {
        state.isLoad = false
        state.error = action.payload
      })
  },
})

export const { actions: ArticleActions } = articleSlice
export const { reducer: ArticleReducer } = articleSlice
