import { Profile, validateErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [validateErrors.NO_DATA]
  }

  const { age, country, first, lastname, username } = profile
  const errors: validateErrors[] = []

  if (!age) {
    errors.push(validateErrors.INCORRECT_USER_AGE)
  }

  if (!first || !lastname || !username) {
    errors.push(validateErrors.INCORRECT_USER_DATA)
  }

  if (!country) {
    errors.push(validateErrors.INCORRECT_COUNTRY)
  }

  return errors
}
