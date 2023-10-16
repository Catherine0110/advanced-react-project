import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { fetchProfileData } from './fetchProfileData'

const data = {
  first: 'Name',
  lastname: 'Lastname',
  age: '20',
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('fetchProfileData', () => {
  test('fetchProfileData.test success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')
    // проверка что запрос вызван
    expect(thunk.api.get).toHaveBeenCalled()
    // проверка что запрос отработал успешно
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверка что вернулись данные о пользователе
    expect(result.payload).toEqual(data)
  })
  test('fetchProfileData.test error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')
    // проверка что запрос отработал c ошибкой
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
