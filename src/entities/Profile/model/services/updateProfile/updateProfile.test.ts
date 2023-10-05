import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { validateErrors } from 'entities/Profile/model/types/profile'
import { updateProfile } from './updateProfile'

const data = {
  first: 'Name',
  lastname: 'Lastname',
  age: '20',
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('updateProfile', () => {
  test('updateProfile.test success', async () => {
    const thunk = new TestAsyncThunk(updateProfile, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()
    // проверка что запрос вызван
    expect(thunk.api.put).toHaveBeenCalled()
    // проверка что запрос отработал успешно
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверка что вернулись данные о пользователе
    expect(result.payload).toEqual(data)
  })
  test('updateProfile.test server error', async () => {
    const thunk = new TestAsyncThunk(updateProfile, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()
    // проверка что запрос отработал c ошибкой
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([validateErrors.SERVER_ERROR])
  })
  test('updateProfile.test validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfile, {
      profile: {
        form: { ...data, first: '' },
      },
    })

    const result = await thunk.callThunk()
    // проверка что запрос отработал c ошибкой
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([validateErrors.INCORRECT_USER_DATA])
  })
})
