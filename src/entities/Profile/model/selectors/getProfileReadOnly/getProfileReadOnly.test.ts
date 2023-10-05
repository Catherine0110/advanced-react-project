import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('selector getProfileReadOnly', () => {
  test('getProfileReadOnly selector', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })
  test('getProfileReadOnly empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
  })
})
