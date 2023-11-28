/* eslint-disable i18next/no-literal-string */

import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Page from 'shared/ui/Page/Page'

const MainPage = () => {
  const { t, i18n } = useTranslation('main')

  return <Page>{t('Главная')}</Page>
}

export default MainPage
