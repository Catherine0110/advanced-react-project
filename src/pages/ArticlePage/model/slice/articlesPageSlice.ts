import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Articles } from 'entities/Articles'
import { ArticleView } from 'entities/Articles/models/types/articles'
import { ARTICLE_VIEW_LOCALS_KEY } from 'shared/const/localStorage'
import { fetchArticlePage } from '../services/fetchArticlePage'
import { ArticlePageSchema } from '../types/articlePage'

const articlesAdapter = createEntityAdapter<Articles>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesAdapter.getInitialState(),
)

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action : PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALS_KEY, action.payload)
    },
    setPage: (state, action : PayloadAction<number>) => {
      state.page = action.payload
    },
    initView: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALS_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 3 : 9
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlePage.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlePage.fulfilled, (state, action: PayloadAction<Articles[]>) => {
        state.isLoading = false
        articlesAdapter.addMany(state, action.payload)
        console.log('action.payload', action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlePage.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice
