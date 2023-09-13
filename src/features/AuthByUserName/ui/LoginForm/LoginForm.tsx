import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Input from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus className={cls.Input} placeholder={t('Логин')} />
      <Input className={cls.Input} placeholder={t('Пароль')} />
      <Button theme={ButtonThemes.OUTLINE}>{t('Войти')}</Button>
    </form>
  )
}

export default LoginForm
