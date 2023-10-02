import { fetchProfileData, profileReducer } from 'entities/Profile'
import ProfileCard from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
