import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  theme?: TextTheme
  text?: string
  title?: string
}

const Text = memo(({ className, theme = TextTheme.PRIMARY, text, title }: TextProps) => (
  <div className={classNames(cls.TextWrap, {}, [className, cls[theme]])}>
    {title && <h3 className={cls.title}>{title}</h3>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
))

export default Text
