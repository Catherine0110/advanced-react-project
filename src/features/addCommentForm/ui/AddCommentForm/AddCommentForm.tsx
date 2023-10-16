import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import Input from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import Button from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { addCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string,
  onSendComment: (text:string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const text = useSelector(addCommentFormText)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const onInputChange = useCallback((val: string) => {
    dispatch(addCommentFormActions.setText(val))
  }, [dispatch])

  const onHendleSendComment = useCallback(() => {
    onSendComment(text || '')
    onInputChange('')
  }, [onSendComment, onInputChange, text])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <label className={cls.label}>
          <Input onChange={onInputChange} value={text} placeholder={t('Комментарий')} />
        </label>
        <Button onClick={onHendleSendComment}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
