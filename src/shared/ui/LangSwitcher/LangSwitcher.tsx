import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button onClick={changeLang} theme={ButtonThemes.CLEAR}>
        {t('Py')}
      </Button>
    </div>
  )
}

export default LangSwitcher
