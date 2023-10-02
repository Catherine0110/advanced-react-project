import { loginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('loginSlice username', () => {
    const state: DeepPartial<loginSchema> = { username: 'admin' }
    expect(loginReducer(state as loginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' })
  })
  test('loginSlice password', () => {
    const state: DeepPartial<loginSchema> = { password: '123' }
    expect(loginReducer(state as loginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' })
  })
})
