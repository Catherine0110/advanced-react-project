import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginloading'

describe('selector load', () => {
  test('loading selector', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoad: true,
      },
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })
  test('loading empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
