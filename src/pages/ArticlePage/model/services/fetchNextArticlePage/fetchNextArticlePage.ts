import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { fetchArticlePage } from 'pages/ArticlePage/model/services/fetchArticlePage'
import { articlePageActions } from 'pages/ArticlePage/model/slice/articlesPageSlice'
import { getArticlesPageHasMore, getArticlesPageIsLoad, getArticlesPageNumber } from '../../selectors/articlesPageSelectors'

export const fetchArticleNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchNextArticlePage',
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const isLoad = getArticlesPageIsLoad(getState())
    const page = getArticlesPageNumber(getState())

    if (hasMore && !isLoad) {
      dispatch(articlePageActions.setPage(page + 1))
      dispatch(
        fetchArticlePage({
          page: page + 1,
        }),
      )
    }
  },
)
