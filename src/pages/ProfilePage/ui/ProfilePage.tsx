import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div>{t('Профиль')}</div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
