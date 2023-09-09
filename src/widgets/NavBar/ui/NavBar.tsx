import { classNames } from 'shared/lib/classNames/classNames'
import { Link } from 'react-router-dom'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  const { t, i18n } = useTranslation()
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.linksWrap}>
        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} className={cls.mainLink} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to="/about">
          {t('O нас')}
        </AppLink>
      </div>
    </div>
  )
}

export default NavBar
