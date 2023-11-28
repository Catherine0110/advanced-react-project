import { Country } from 'entities/Country/model/types/Country'
import { Currency } from 'entities/Currency'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileLoad,
  getProfileReadOnly,
  profileActions,
  profileReducer,
  validateErrors,
} from 'entities/Profile'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { getProfileValidateErrors } from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import ProfileCard from 'entities/Profile/ui/ProfileCard/ProfileCard'
import ProfileHeader from 'entities/Profile/ui/ProfileHeader/ProfileHeader'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEfect'
import Page from 'shared/ui/Page/Page'
import Text, { TextTheme } from 'shared/ui/Text/Text'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const data = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const loading = useSelector(getProfileLoad)
  const readOnly = useSelector(getProfileReadOnly)
  const validateProfileErrors = useSelector(getProfileValidateErrors)
  const validateProfileErrorsTranslate = {
    [validateErrors.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [validateErrors.INCORRECT_USER_AGE]: t('Введите возраст'),
    [validateErrors.INCORRECT_USER_DATA]: t('Некорректные данные'),
    [validateErrors.NO_DATA]: t('Заполните данные'),
    [validateErrors.SERVER_ERROR]: t('Серверная ошибка'),
  }

  const onChangeFirstName = (val: string) => {
    dispatch(profileActions.updateProfile({ first: val || '' }))
  }
  const onChangeLastName = (val: string) => {
    dispatch(profileActions.updateProfile({ lastname: val || '' }))
  }
  const onChangeAge = (val: string) => {
    dispatch(profileActions.updateProfile({ age: Number(val) }))
  }
  const onChangeCity = (val: string) => {
    dispatch(profileActions.updateProfile({ city: val || '' }))
  }
  const onChangeAva = (val: string) => {
    dispatch(profileActions.updateProfile({ avatar: val || '' }))
  }
  const onChangeLogin = (val: string) => {
    dispatch(profileActions.updateProfile({ username: val || '' }))
  }
  const onChangeCurrency = (currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }
  const onChangeCountry = (country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }
  const { id } = useParams<{ id: string }>()

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page>
        <ProfileHeader />
        {validateProfileErrors?.length &&
          validateProfileErrors.map((er) => (
            <Text
              text={validateProfileErrorsTranslate[er]}
              key={er}
              theme={TextTheme.ERROR}
            />
          ))}
        <ProfileCard
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAva={onChangeAva}
          onChangeLogin={onChangeLogin}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readOnly={readOnly}
          data={data}
          error={error}
          loading={loading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
