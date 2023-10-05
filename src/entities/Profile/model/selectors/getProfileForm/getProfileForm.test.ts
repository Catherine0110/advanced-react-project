import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileForm } from './getProfileForm'

describe('selector getProfileForm', () => {
  test('getProfileForm selector', () => {
    const data = {
      first: 'Name',
      lastname: 'Lastname',
      age: '20',
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })
  test('getProfileForm empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
