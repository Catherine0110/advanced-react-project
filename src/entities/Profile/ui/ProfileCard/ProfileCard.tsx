import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { Profile } from 'entities/Profile/model/types/profile'
import Loader, { LoaderSize } from 'shared/ui/Loader/Loader'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string,
  data?: Profile,
  loading?: boolean,
  error?: string,
  readOnly?: boolean,
  onChangeLastName?: (val: string) => void,
  onChangeFirstName?: (val: string) => void,
  onChangeAge?: (val: string) => void,
  onChangeCity?: (val: string) => void,
  onChangeLogin?: (val: string) => void,
  onChangeAva?: (val: string) => void,
  onChangeCurrency?: (currency: Currency) => void,
  onChangeCountry?:(country: Country) => void,
}

const ProfileCard = (props: ProfileCardProps) => {
  const { className, loading, error, data, readOnly,
    onChangeFirstName, onChangeLastName, onChangeAge, onChangeCity, onChangeLogin, onChangeAva, onChangeCurrency, onChangeCountry } = props
  const { t } = useTranslation()

  if (error) {
    return (
      <div className={cls.errWrap}>
        <Text theme={TextTheme.ERROR} title={t('Произошла ошибка')} />
      </div>
    )
  }
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {loading
        ? (
          <div className={cls.loadWrap}>
            <Loader size={LoaderSize.L} />
          </div>
        )
        : (
          <>
            {data?.avatar && (
              <div className={cls.avaWrap}>
                <Avatar src={data?.avatar} />
              </div>
            )}
            <form className={cls.form}>
              <Input
                className={cls.input}
                placeholder={t('Имя')}
                value={data?.first}
                readOnly={readOnly}
                onChange={onChangeFirstName}
                autofocus={!readOnly}
              />
              <Input
                className={cls.input}
                placeholder={t('Фамилия')}
                value={data?.lastname}
                readOnly={readOnly}
                onChange={onChangeLastName}
              />
              <Input
                className={cls.input}
                placeholder={t('Возраст')}
                value={data?.age}
                readOnly={readOnly}
                onChange={onChangeAge}
                type="number"
              />
              <Input
                className={cls.input}
                placeholder={t('Город')}
                value={data?.city}
                readOnly={readOnly}
                onChange={onChangeCity}
              />
              <Input
                className={cls.input}
                placeholder={t('Логин')}
                value={data?.username}
                readOnly={readOnly}
                onChange={onChangeLogin}
              />
              <Input
                className={cls.input}
                placeholder={t('Аватар')}
                value={data?.avatar}
                readOnly={readOnly}
                onChange={onChangeAva}
              />
              <CurrencySelect className={cls.input} value={data?.currency} readonly={readOnly} onChange={onChangeCurrency} />
              <CountrySelect onChange={onChangeCountry} value={data?.country} readonly={readOnly} />
            </form>
          </>
        )}
    </div>
  )
}

export default ProfileCard
