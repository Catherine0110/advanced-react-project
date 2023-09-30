import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('selector username', () => {
  test('username selector', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })
  test('username empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
