import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'

import { useContext, useEffect } from 'react'
import { ModalContext } from 'app/providers/Modal/lib/ModalContext'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const { open, setCh } = useContext(ModalContext)

  const openM = () => {
    setCh('qqqqqqqqq')
    open()
  }
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.linksWrap}>
        <Button onClick={openM} theme={ButtonThemes.OUTLINE_Inverted}>
          {t('Войти')}
        </Button>
      </div>
    </div>
  )
}

export default NavBar
