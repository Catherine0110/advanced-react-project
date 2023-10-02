import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import cls from './ProfileCard.module.scss'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'

interface ProfileCardProps {
  className?: string
}

const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation()
  const data = useSelector(getProfileData)
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.btnEdit} theme={ButtonThemes.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <form className={cls.form}>
        <Input
          className={cls.input}
          placeholder={t('Имя')}
          value={data?.first}
        />
        <Input
          className={cls.input}
          placeholder={t('Фамилия')}
          value={data?.lastname}
        />
      </form>
    </div>
  )
}

export default ProfileCard
