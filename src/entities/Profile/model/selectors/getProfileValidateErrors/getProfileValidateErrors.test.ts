import { StateSchema } from 'app/providers/StoreProvider'
import { validateErrors } from 'entities/Profile/model/types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('selector getProfileValidateErrors', () => {
  test('getProfileValidateErrors selector', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateProfileErrors: [
          validateErrors.INCORRECT_USER_DATA,
          validateErrors.SERVER_ERROR,
        ],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([validateErrors.INCORRECT_USER_DATA,
      validateErrors.SERVER_ERROR])
  })
  test('getProfileValidateErrors empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
