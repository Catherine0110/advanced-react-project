import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'

import { Suspense, memo, useContext, useEffect } from 'react'
import { ModalContext } from 'app/providers/Modal/lib/ModalContext'

import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { LoginFormAsync } from 'features/AuthByUserName/ui/LoginForm/LoginForm.async'
import PageLoader from 'widgets/PageLoader/ui/PageLoader'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const { open, setCh } = useContext(ModalContext)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const openM = () => {
    setCh(
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync />
      </Suspense>,
    )
    open()
  }
  const logOut = () => {
    dispatch(userActions.logOut())
  }
  return (
    <header className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.linksWrap}>
        <Button
          onClick={authData ? logOut : openM}
          theme={ButtonThemes.OUTLINE_Inverted}
        >
          {authData ? t('Выйти') : t('Войти')}
        </Button>
      </div>
    </header>
  )
})

export default NavBar
