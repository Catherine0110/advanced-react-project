import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchArticleNextPage } from './fetchNextArticlePage'
import { fetchArticlePage } from '../fetchArticlePage'

jest.mock('../fetchArticlePage')

describe('fetchNextArticlePage', () => {
  test('fetchNextArticlePage.test success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleNextPage, {
      articlePage: {
        entities: {},
        hasMore: true,
        limit: 5,
        page: 2,
        isLoading: false,
        ids: [],
      },
    })

    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlePage).toHaveBeenCalledWith({ page: 3 })
  })
  test('fetchNextArticlePage.test not called', async () => {
    const thunk = new TestAsyncThunk(fetchArticleNextPage, {
      articlePage: {
        entities: {},
        hasMore: false,
        limit: 5,
        page: 2,
        isLoading: false,
        ids: [],
      },
    })

    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlePage).not.toHaveBeenCalled()
  })

  test('fetchNextArticlePage.test load', async () => {
    const thunk = new TestAsyncThunk(fetchArticleNextPage, {
      articlePage: {
        entities: {},
        hasMore: true,
        limit: 5,
        page: 2,
        isLoading: true,
        ids: [],
      },
    })

    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlePage).not.toHaveBeenCalled()
  })
})
