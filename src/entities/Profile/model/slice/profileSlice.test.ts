import { updateProfile } from 'entities/Profile/model/services/updateProfile/updateProfile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ProfileSchema, validateErrors } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'

const data = {
  first: 'Name',
  lastname: 'Lastname',
  age: '20',
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
}

describe('profileSlice', () => {
  test('profileSlice username', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({ readonly: true })
  })
  test('profileSlice update', () => {
    const state: DeepPartial<ProfileSchema> = { form: { first: 'first name' } }
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: 'first name' }))).toEqual({ form: { first: 'first name' } })
  })
  test('profileSlice pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoad: true, validateProfileErrors: [validateErrors.SERVER_ERROR] }
    expect(profileReducer(state as ProfileSchema, updateProfile.pending)).toEqual({ isLoad: true, validateProfileErrors: undefined })
  })
  test('profileSlice fullfield', () => {
    const state: DeepPartial<ProfileSchema> = { isLoad: true }
    expect(profileReducer(state as ProfileSchema, updateProfile.fulfilled(data, ''))).toEqual({
      isLoad: false, readonly: true, data, form: data, validateProfileErrors: undefined,
    })
  })
})
