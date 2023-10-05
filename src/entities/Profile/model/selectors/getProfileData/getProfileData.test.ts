import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileData } from './getProfileData'

describe('selector profileData', () => {
  test('profileData selector', () => {
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
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('profileData empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
