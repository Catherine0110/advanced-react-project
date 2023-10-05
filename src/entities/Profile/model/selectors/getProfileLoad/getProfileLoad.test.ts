import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileLoad } from './getProfileLoad'

describe('selector getProfileLoad', () => {
  test('getProfileLoad selector', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoad: true,
      },
    }
    expect(getProfileLoad(state as StateSchema)).toEqual(true)
  })
  test('getProfileLoad empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getProfileLoad(state as StateSchema)).toEqual(undefined)
  })
})
