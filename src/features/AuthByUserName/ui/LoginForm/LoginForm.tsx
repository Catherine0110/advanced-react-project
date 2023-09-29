import React, { useCallback, useContext, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { loginActions, loginReducer } from 'features/AuthByUserName/modal/slice/loginSlice'
import { loginByUserName } from 'features/AuthByUserName/modal/services/loginByUserName/loginByUserName'
import Loader, { LoaderSize } from 'shared/ui/Loader/Loader'
import Text, { TextTheme } from 'shared/ui/Text/Text'

import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { ReducersList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader'
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
  const dispatch = useDispatch()

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
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(loginByUserName({ username, password }))
    },
    [dispatch, username, password],
  )
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={classNames(cls.LoginForm, {}, [className])}>
        <Text className={cls.title} title={t('Авторизация')} />
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
