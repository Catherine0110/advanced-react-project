import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { validateErrors } from 'entities/Profile/model/types/profile'
import { validateProfileData } from './validateProfileData'

const data = {
  first: 'Name',
  lastname: 'Lastname',
  age: '20',
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('validateProfileData', () => {
  test('validateProfileData.test no errors', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })
  test('validateProfileData.test data errors', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })
    expect(result).toEqual([validateErrors.INCORRECT_USER_DATA])
  })
  test('validateProfileData.test age errors', async () => {
    const result = validateProfileData({ ...data, age: undefined })
    expect(result).toEqual([validateErrors.INCORRECT_USER_AGE])
  })
  test('validateProfileData.test empty errors', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([validateErrors.INCORRECT_USER_AGE, validateErrors.INCORRECT_USER_DATA, validateErrors.INCORRECT_COUNTRY])
  })
})
