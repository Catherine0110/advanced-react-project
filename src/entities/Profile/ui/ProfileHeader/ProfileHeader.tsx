import React, { useCallback } from 'react';
import Button, { ButtonThemes } from 'shared/ui/Button/Button';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { updateProfile } from 'entities/Profile/model/services/updateProfile/updateProfile';
import cls from './ProfileHeader.module.scss'

const ProfileHeader = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const readOnly = useSelector(getProfileReadOnly)
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(true))
  }, [dispatch])
  const onSave = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(updateProfile())
  }, [dispatch])
  return (
    <div className={cls.header}>
      <Text size={TextSize.L} title={t('Профиль')} />
      {readOnly ? (
        <Button onClick={onEdit} className={cls.btnEdit} theme={ButtonThemes.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )
        : (
          <div>
            <Button onClick={onCancelEdit} className={cls.btnEdit} theme={ButtonThemes.RED}>
              {t('Отменить')}
            </Button>
            <Button onClick={onSave} className={cls.btnEdit} theme={ButtonThemes.OUTLINE}>
              {t('Сохранить')}
            </Button>
          </div>
        )}
    </div>
  )
};

export default ProfileHeader;
