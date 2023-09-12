/* eslint-disable i18next/no-literal-string */

import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t, i18n } = useTranslation('main')

  return <div>{t('Главная')}</div>
}

export default AboutPage
