import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comments'
import { ArticlePageDetailCommentsSchema } from '../types/articlePageDetailComment'
import { fetchArticleCommentsById } from '../services/fetchArticleCommentsById/fetchArticleCommentsById'

const articleDetailCommentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const getArticleComments = articleDetailCommentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailComments || articleDetailCommentAdapter.getInitialState(),
)

const articleDetailCommentSlice = createSlice({
  name: 'articleDetailCommentSlice',
  initialState: articleDetailCommentAdapter.getInitialState<ArticlePageDetailCommentsSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleCommentsById.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        articleDetailCommentAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleCommentsById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailCommentReducer } = articleDetailCommentSlice
