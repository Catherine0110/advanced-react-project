import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('selector getProfileError', () => {
  test('getProfileError selector', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('error')
  })
  test('getProfileError empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
