import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('selector with errror', () => {
  test('error selector', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })
  test('error empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
