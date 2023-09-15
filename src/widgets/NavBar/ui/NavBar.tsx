import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'

import { useContext, useEffect } from 'react'
import { ModalContext } from 'app/providers/Modal/lib/ModalContext'
import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const { open, setCh } = useContext(ModalContext)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const openM = () => {
    setCh(<LoginForm />)
    open()
  }
  const logOut = () => {
    dispatch(userActions.logOut())
  }
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.linksWrap}>
        <Button onClick={authData ? logOut : openM} theme={ButtonThemes.OUTLINE_Inverted}>
          {authData ? t('Выйти') : t('Войти')}
        </Button>
      </div>
    </div>
  )
}

export default NavBar
