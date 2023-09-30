import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { loginByUserName } from './loginByUserName'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
/*
Example

describe('loginByUserName', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema
  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })
  test('loginByUserName.test success', async () => {
    const userVal = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userVal }))
    const action = loginByUserName({ password: '123', username: 'admin' })
    const result = await action(dispatch, getState, undefined)
    // проверка что экш вызван с данными userVal
    expect(dispatch).toBeCalledWith(userActions.setAuthData(userVal))
    // проверка что запрос вызван
    expect(mockedAxios.post).toHaveBeenCalled()
    // проверка что запрос отработал успешно
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверка что вернулись данные о пользователе
    expect(result.payload).toEqual(userVal)
  })
  test('loginByUserName.test error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = loginByUserName({ password: '123', username: 'admin' })
    const result = await action(dispatch, getState, undefined)
    // проверка что dispatch вызвался 2 раза
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    // проверка что запрос отработал c ошибкой
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
*/
describe('loginByUserName', () => {
  test('loginByUserName.test success', async () => {
    const userVal = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userVal }))
    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ password: '123', username: 'admin' })
    // проверка что экш вызван с данными userVal
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userVal))
    // проверка что запрос вызван
    expect(mockedAxios.post).toHaveBeenCalled()
    // проверка что запрос отработал успешно
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверка что вернулись данные о пользователе
    expect(result.payload).toEqual(userVal)
  })
  test('loginByUserName.test error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ password: '123', username: 'admin' })
    // проверка что dispatch вызвался 2 раза
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    // проверка что запрос отработал c ошибкой
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
