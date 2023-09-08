import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

const PageError = () => {
  const { t } = useTranslation()
  const onReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }
  return (
    <div className={cls.PageError}>
      <h2 className={cls.ErrTitle}>{t('Something went wrong')}</h2>
      <Button onClick={onReload}>{t('Обновить страницу')}</Button>
    </div>
  )
}

export default PageError
