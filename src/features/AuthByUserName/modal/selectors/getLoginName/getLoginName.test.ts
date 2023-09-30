import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginName } from './getLoginName'

describe('selector username', () => {
  test('username selector', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    }
    expect(getLoginName(state as StateSchema)).toEqual('admin')
  })
  test('username empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getLoginName(state as StateSchema)).toEqual('')
  })
})
