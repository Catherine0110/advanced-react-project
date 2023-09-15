import React, { useCallback, useContext } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUserName/modal/slice/loginSlice'
import { loginByUserName } from 'features/AuthByUserName/modal/services/loginByUserName/loginByUserName'
import Loader, { LoaderSize } from 'shared/ui/Loader/Loader'
import Text, { TextTheme } from 'shared/ui/Text/Text'

import cls from './LoginForm.module.scss'
import { getLoginState } from '../../modal/selectors/getLoginState'

interface LoginFormProps {
  className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoad } = useSelector(getLoginState)
  const changeUserName = (value: string) => {
    dispatch(loginActions.setUsername(value))
  }
  const changePassword = (value: string) => {
    dispatch(loginActions.setPassword(value))
  }
  const onLoginClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(loginByUserName({ username, password }))
    },
    [dispatch, username, password],
  )
  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Text className={cls.title} title={t('Авторизация')} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        value={username}
        onChange={changeUserName}
        autoFocus
        className={cls.Input}
        placeholder={t('Логин')}
      />
      <Input
        value={password}
        onChange={changePassword}
        className={cls.Input}
        placeholder={t('Пароль')}
      />
      <Button disabled={isLoad} onClick={onLoginClick} theme={ButtonThemes.OUTLINE}>
        {isLoad && <Loader size={LoaderSize.S} />}
        {t('Войти')}
      </Button>
    </form>
  )
}

export default LoginForm
