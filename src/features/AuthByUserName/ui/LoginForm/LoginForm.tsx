import React, { useCallback, useContext } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from 'features/AuthByUserName/modal/slice/loginSlice'
import { loginByUserName } from 'features/AuthByUserName/modal/services/loginByUserName/loginByUserName'
import Loader, { LoaderSize } from 'shared/ui/Loader/Loader'
import Text, { TextSize, TextTheme } from 'shared/ui/Text/Text'

import { ReducersList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ModalContext } from 'app/providers/Modal'
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError'
import { getLoginLoading } from '../../modal/selectors/getLoginloading/getLoginloading'
import cls from './LoginForm.module.scss'
import { getLoginName } from '../../modal/selectors/getLoginName/getLoginName'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { close } = useContext(ModalContext)

  const username = useSelector(getLoginName)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoad = useSelector(getLoginLoading)

  const changeUserName = (value: string) => {
    dispatch(loginActions.setUsername(value))
  }
  const changePassword = (value: string) => {
    dispatch(loginActions.setPassword(value))
  }
  const onLoginClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const result = await dispatch(loginByUserName({ username, password }))
      if (result.meta.requestStatus === 'fulfilled') {
        close()
      }
    },
    [dispatch, username, password, close],
  )
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={classNames(cls.LoginForm, {}, [className])}>
        <Text size={TextSize.L} className={cls.title} title={t('Авторизация')} />
        {error && <Text theme={TextTheme.ERROR} text={error} />}
        <Input value={username} onChange={changeUserName} autoFocus className={cls.Input} placeholder={t('Логин')} />
        <Input value={password} onChange={changePassword} className={cls.Input} placeholder={t('Пароль')} />
        <Button disabled={isLoad} onClick={onLoginClick} theme={ButtonThemes.OUTLINE}>
          {isLoad && <Loader size={LoaderSize.S} />}
          {t('Войти')}
        </Button>
      </form>
    </DynamicModuleLoader>
  )
}

export default LoginForm
