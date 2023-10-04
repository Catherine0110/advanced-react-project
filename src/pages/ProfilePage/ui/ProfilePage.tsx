import { Country } from 'entities/Country/model/types/Country'
import { Currency } from 'entities/Currency'
import { fetchProfileData, getProfileData, getProfileError, getProfileLoad, getProfileReadOnly, profileActions, profileReducer } from 'entities/Profile'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import ProfileCard from 'entities/Profile/ui/ProfileCard/ProfileCard'
import ProfileHeader from 'entities/Profile/ui/ProfileHeader/ProfileHeader'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

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

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <ProfileHeader />
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
    </DynamicModuleLoader>
  )
}

export default ProfilePage
