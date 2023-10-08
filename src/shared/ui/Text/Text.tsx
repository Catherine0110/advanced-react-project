import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}
export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}
export enum TextSize {
  XL = 'font_xl',
  L = 'font_l',
}

interface TextProps {
  className?: string
  theme?: TextTheme
  text?: string | number
  title?: string,
  align?: TextAlign,
  size?: TextSize
}

const Text = memo(({ className, theme = TextTheme.PRIMARY, text, title, align = TextAlign.LEFT, size = TextSize.L }: TextProps) => (
  <div className={classNames(cls.TextWrap, {}, [className, cls[theme], cls[align], cls[size]])}>
    {title && <h3 className={cls.title}>{title}</h3>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
))

export default Text
